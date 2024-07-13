import Link from "next/link";
import Image from "next/image";
import './main.css';

export default function Main({ data, source }) {
    const articlesToShow = data.articles.filter((article) => {
        if (article.description !== null && article.url !== 'https://removed.com') {
            return article;
        } else {
            return false;
        }
    });

    const sourcesToShow = source.sources;

    return (
        <div className="main-wrapper">
            <div className='main-left'>
                {articlesToShow.map((article, index) => {
                    const date = new Date(article.publishedAt);
                    const year = date.getFullYear();
                    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
                    const day = date.getDate();
                    const formattedDate = `${year} ${month} ${day}`;

                    return (
                        <Link key={index} className="news-card" href={article.url}>
                            <div className="img-container">
                                <Image width={250} height={200}
                                    src={article.urlToImage || ''}
                                    alt="img"
                                />
                            </div>
                            <div className="content-container">
                                <h3 className='article-title'>{article.title}</h3>
                                <div className='article-desc'>
                                    <p>{article.description}</p>
                                </div>
                                <div className='article-date' >
                                    <span>{formattedDate}</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div className='main-right'>
                <div className="source-container">
                    {sourcesToShow.map((source, index) => (
                        <Link key={index} href={source.url} className="source-name">{source.name}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
