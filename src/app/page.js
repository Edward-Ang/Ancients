//./src/app/page.js
import axios from "axios";
import Header from "@/components/header/header";
import Search from "@/components/search/search";
import Main from "@/components/main/main";
import fetchSource from "./fetchSource";

async function getData() {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&q=&apiKey=${apiKey}`, {
      /*       next: { revalidate: 60 }, // Optional: for caching and revalidation */
    });

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

export default async function Home() {
  const newsData = await getData();
  const newsSource = await fetchSource('general');
  return (
    <>
      <Header />
      <Main data={newsData} source={newsSource} />
    </>
  );
}