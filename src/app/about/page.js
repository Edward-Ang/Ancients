import Header from '@/components/header/header';
import styles from './page.module.css';
import Footer from '@/components/footer/footer';
import Image from 'next/image';
import AboutIllustration from '@/assets/images/aboutIllustration.png';

export const metadata = {
  title: 'About',
};

export default function About() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <h1 className={styles.title}>About Ancients News</h1>
                        <p className={styles.content}>
                            Welcome to Ancients News, your go-to destination for the latest and most comprehensive news coverage.
                            Our mission is to provide accurate, insightful, and timely information on a wide range of topics
                            including world events, regional news, finance, academia, programming, lifestyle, food, opinion,
                            and gaming.
                        </p>
                        <h2 className={styles.subTitle}>Our Mission</h2>
                        <p className={styles.content}>
                            At Ancients News, we believe in the power of informed communities. We strive to deliver news that matters,
                            offering in-depth analysis and diverse perspectives to help our readers stay well-informed and engaged
                            with the world around them.
                        </p>
                        <h2 className={styles.subTitle}>Our Team</h2>
                        <p className={styles.content}>
                            Our dedicated team of journalists, editors, and contributors work tirelessly to bring you the stories that
                            shape our world. We are committed to journalistic integrity, transparency, and delivering high-quality
                            content.
                        </p>
                        <h4 className={styles.closure}>Thank you for choosing Ancients News as your trusted news source.</h4>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.imgContainer}>
                            <Image width={500} className={styles.image} src={AboutIllustration} alt='About Ancients News' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}