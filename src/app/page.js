//./src/app/page.js
import Header from "@/components/header/header";
import BackToTop from "@/components/BackToTop/backToTop";
import dynamic from "next/dynamic";

const Main = dynamic(() => import('@/components/main/main'));

async function getData() {
  const apiKey = process.env.NEWS_API_KEY;
  try {
    const response = await fetch(`https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}`, {
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
  return (
    <>
      <Header />
      <Main data={newsData} />
      <BackToTop />
    </>
  );
}