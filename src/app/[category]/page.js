// src/app/[category]/page.js
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import BackToTop from "@/components/BackToTop/backToTop";
import dynamic from "next/dynamic";
import cat from "@/assets/data/metadata.json";
import getData from "@/app/api";
import Loading from "./loading";

const Main = dynamic(() => import('@/components/main/main'), {
    loading: () => <Loading />
});

export async function generateStaticParams() {
    // Define the categories for which you want to generate static pages
    const categories = ['general', 'technology', 'business', 'entertainment', 'sports', 'health', 'science', 'world', 'regional', 'politics', 'finance', 'academia', 'programming', 'lifestyle', 'food', 'opinion', 'game'];

    return categories.map(category => ({
        category
    }));
}

export async function generateMetadata({ params }) {
    const { category } = params;

    return cat[category] || {};
}

export default async function CategoryPage({ params }) {
    const { category } = params;
    const newsData = await getData(category);
    console.log(category);

    return (
        <>
            <Header />
            <Main data={newsData} />
            <Footer />
            <BackToTop />
        </>
    );
}