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
    try {
        const response = await fetch(`https://api.currentsapi.services/v1/search?category=${category}&apiKey=qZtLGL_is3hw5GJh6zMASTKzD-34ou1Uv5n0I-3pcgAD11Mb`);
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
    const [sourcesData, setSourcesData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getCategory = async () => {
            setIsLoading(true);
            try {
                const [newsArticles, newsSources] = await Promise.all([
                    getData(category),
                    fetchSource(category),
                ]);
                setNewsData(newsArticles);
                setSourcesData(newsSources);
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
                <p>Loading...</p>
            ) : (
                newsData && sourcesData && <Main data={newsData} source={sourcesData} />
            )}
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