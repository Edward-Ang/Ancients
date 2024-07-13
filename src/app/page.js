import Header from "@/components/header/header";
import Main from "@/components/main/main";

async function getData() {
  const apiKey = process.env.NEWS_API_KEY;
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`, {
/*       next: { revalidate: 60 }, // Optional: for caching and revalidation */
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return { articles: [] }; // Return empty data on error
  }
}

export default async function Home() {
  const newsData = await getData();
  return (
    <>
      <Header />
      <Main data={newsData} />
    </>
  );
}