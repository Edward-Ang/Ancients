'use client';
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import BackToTop from "@/components/BackToTop/backToTop";
import Loading from "./loading";

const Main = dynamic(() => import('@/components/main/main'), {
  loading: () => <Loading />
});

async function getData(category) {
    const apiKey = process.env.NEWS_API_KEY || process.env.NEXT_PUBLIC_NEWS_API_KEY;
    try {
        const response = await fetch(`https://api.currentsapi.services/v1/search?category=${category}&apiKey=${apiKey}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

function CategoryContent() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category') || '';
    const [newsData, setNewsData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getCategory = async () => {
            setIsLoading(true);
            try {
                const [newsArticles] = await Promise.all([
                    getData(category),
                ]);
                setNewsData(newsArticles);
                setError(null);
            } catch (error) {
                console.error('Failed to fetch category:', error);
                setError('Failed to load data. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        }
        getCategory();
    }, [category]);

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

export default function Category() {
    return (
        <Suspense fallback={<Loading />}>
            <CategoryContent />
        </Suspense>
    );
}