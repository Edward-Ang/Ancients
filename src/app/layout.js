import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata = {
  title: "Ancients",
  description: "Discover the latest news and updates from around the world on Ancients. Stay informed with breaking headlines, in-depth articles, and diverse perspectives. Explore trending topics in politics, technology, entertainment, and more, curated for your interests. Visit now for real-time news coverage and analysis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="end">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}