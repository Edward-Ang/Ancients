'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import BackToTop from '@/components/BackToTop/backToTop';
import fetchData from './fetchData';
import Loading from './loading';

const Main = dynamic(() => import('@/components/main/main'), {
  loading: () => <Loading />
});

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const search = async () => {
      if (query) {
        setIsLoading(true);
        setError(null);
        try {
          const [articlesData] = await Promise.all([
            fetchData(query),
          ]);
          setNewsData(articlesData);
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
        <Loading />
      ) : (
        newsData && <Main data={newsData} />
      )}
      <Footer />
      <BackToTop />
    </>
  );
}

export default function SearchResults() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchResultsContent />
    </Suspense>
  );
}