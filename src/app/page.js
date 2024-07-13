import styles from "./page.module.css";
import Header from "@/components/header/header";
import Main from "@/components/main/main";

async function getData() {
  const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e51073a1a8724915ac0d1622c70b114a');
  const data = await response.json();
  return data;
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

