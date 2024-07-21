import { Roboto } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata = {
  title: "Ancients News | Latest News and Updates",
  description: "Discover the latest news and updates from around the world on Ancients News. Stay ahead with trending topics in politics, technology, entertainment, and more. Experience real-time news coverage and insightful analysis exclusively on Ancients News.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="ancients, ancients news, news, latest news, breaking news, politics, technology, entertainment, world news" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={roboto.className}>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-B41W5P4D5Y"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B41W5P4D5Y');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}