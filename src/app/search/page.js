'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/header/header';
import fetchData from './fetchData';
import fetchSource from '../fetchSource';

const Main = dynamic(() => import('@/components/main/main'), {
  loading: () => <div>Loading main component...</div>
});

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [newsData, setNewsData] = useState(null);
  const [sourcesData, setSourcesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const search = async () => {
      if (query) {
        setIsLoading(true);
        setError(null);
        try {
          const [articlesData, sourcesData] = await Promise.all([
            fetchData(query),
            fetchSource('general')
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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        newsData && sourcesData && <Main data={newsData} source={sourcesData} />
      )}
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