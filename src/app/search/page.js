'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/header/header';
import fetchData from './fetchData';

const Main = dynamic(() => import('@/components/main/main'), {
  loading: () => <div>Loading main component...</div>
});

const getSource = async () => {
  const apiKey = process.env.NEWS_API_KEY  || process.env.NEXT_PUBLIC_NEWS_API_KEY;
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}&country=us&language=en&category=general`);
    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }
    const data = await response.json();
    console.log('Sources:', data.sources);
    return data;
  } catch (error) {
    console.error('Error fetching sources:', error);
    throw error; // Re-throw to handle in the component
  }
};

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [newsData, setNewsData] = useState({ articles: [] });
  const [sourcesData, setSourcesData] = useState({ sources: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const search = async () => {
      if (query) {
        setIsLoading(true);
        setError(null);
        try {
          const [articlesData, sourcesData] = await Promise.all([
            fetchData(query),
            getSource()
          ]);
          setNewsData(articlesData);
          setSourcesData(sourcesData);
        } catch (err) {
          setError('Failed to fetch data. Please try again later.');
          console.error('Search error:', err);
        } finally {
          setIsLoading(false);
        }
      }
    };
    search();
  }, [query]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <Main data={newsData} source={sourcesData} />
    </>
  );
}

export default function SearchResults() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}