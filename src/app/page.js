//./src/app/page.js
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import BackToTop from "@/components/BackToTop/backToTop";
import dynamic from "next/dynamic";
import Loading from "./loading";

const Main = dynamic(() => import('@/components/main/main'), {
  loading: () => <Loading />
});

const apiKey = process.env.NEWS_API_KEY;
const apiUrl = `https://api.currentsapi.services/v1/latest-news?language=en&apiKey=${apiKey}`;

async function getData() {
  try {
    const response = await fetch(apiUrl, {
      next: { revalidate: 86400 }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return { articles: [] }; // Provide a default empty array in case of errors
  }
}

export default async function Home() {
  const newsData = await getData();
  return (
    <>
      <Header />
      <Main data={newsData} />
      <Footer />
      <BackToTop />
    </>
  );
}