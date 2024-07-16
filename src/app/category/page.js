'use client';

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "@/components/header/header";
import fetchSource from "../fetchSource";

const Main = dynamic(() => import('@/components/main/main'), {
  loading: () => <p>Loading...</p>
});

async function getData(category) {
    const apiKey = process.env.NEWS_API_KEY || process.env.NEXT_PUBLIC_NEWS_API_KEY;
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&q=&category=${category}&apiKey=${apiKey}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error to be caught in the component
    }
}

function CategoryContent() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category') || '';
    const [newsData, setNewsData] = useState({ articles: [] });
    const [sourcesData, setSourcesData] = useState({ sources: [] });
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCategory = async () => {
            try {
                const [newsArticles, newsSources] = await Promise.all([
                    getData(category),
                    fetchSource(category),
                ]);
                setNewsData(newsArticles);
                setSourcesData(newsSources);
                setError(null); // Clear any previous errors
            } catch (error) {
                console.error('Failed to fetch category:', error);
                setError('Failed to load data. Please try again later.');
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
            <Main data={newsData} source={sourcesData} />
        </>
    );
}

export default function Category() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CategoryContent />
        </Suspense>
    );
}