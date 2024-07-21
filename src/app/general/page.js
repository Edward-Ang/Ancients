import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import BackToTop from "@/components/BackToTop/backToTop";
import getData from "../api";
import dynamic from "next/dynamic";
import Loading from "./loading";

export const metadata = {
    title: 'General',
  };

const Main = dynamic(() => import('@/components/main/main'), {
    loading: () => <Loading />
});

export default async function General() {
    const newsData = await getData('general');
    return (
        <>
            <Header />
            <Main data={newsData} />
            <Footer />
            <BackToTop />
        </>
    );
}