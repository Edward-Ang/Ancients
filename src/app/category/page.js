'use client';

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import fetchSource from "../fetchSource";

async function getData(category) {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&q=&category=${category}&apiKey=${apiKey}`);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching data:', error);
        return { articles: [] };
    }
}

export default function Category() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category' || '');
    const [newsData, setNewsData] = useState({ articles: [] });
    const [sourcesData, setSourcesData] = useState({ sources: [] });

    useEffect(() => {
        const getCategory = async () => {
            try {
                const [newsArticles, newsSources] = await Promise.all([
                    getData(category),
                    fetchSource(category),
                ]);
                setNewsData(newsArticles);
                setSourcesData(newsSources);
            } catch (error) {
                console.log('Failed to fetch category');
            }
        }

        getCategory();
    }, [category]);

    console.log(sourcesData);
    return (
        <>
            <Header />
            <Main data={newsData} source={sourcesData} />
        </>
    );
}