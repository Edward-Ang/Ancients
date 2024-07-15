'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/header/header';
import Main from '@/components/main/main';
import fetchData from './fetchData';

const getSource = async () => {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}&country=us&language=en&category=technology`);
    if (response.status === 200) {
      console.log('Sources:', response.data.sources);
      return response.data;
    } else {
      throw new Error(`API responded with status ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching sources:', error);
    return { sources: [] };
  }
};

export default function SearchResults() {
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

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