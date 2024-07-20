import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import BackToTop from "@/components/BackToTop/backToTop";
import getData from "../api";
import dynamic from "next/dynamic";
import Loading from "./loading";

const Main = dynamic(() => import('@/components/main/main'), {
    loading: () => <Loading />
});

export default async function Science() {
    const newsData = await getData('science');
    return (
        <>
            <Header />
            <Main data={newsData} />
            <Footer />
            <BackToTop />
        </>
    );
}