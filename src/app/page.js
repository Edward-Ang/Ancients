//./src/app/page.js
import Header from "@/components/header/header";
import dynamic from "next/dynamic";
import fetchSource from "./fetchSource";

const Main = dynamic(() => import('@/components/main/main'));

async function getData() {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&q=&apiKey=${apiKey}`, {
      next: { revalidate: 86400 } // Optional: for caching and revalidation in 24 hrs
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