import Link from "next/link";
import { ImageWithFallback } from "@/app/imgWithFallback";
import { RocketLaunch } from "@mui/icons-material";
import './main.css';

export default function Main({ data, source }) {
    const articlesToShow = data.news.filter((article) =>
        article.description !== null && article.url !== 'https://removed.com'
    );
    const sourcesToShow = source.sources || source.articles;

    return (
        <div className="main-wrapper">
            <div className='main-left'>
                {articlesToShow.map((article, index) => {
                    const date = new Date(article.published);
                    const formattedDate = date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });

                    return (
                        <Link key={article.url || index} className="news-card" href={article.url}>
                            <div className="img-container">
                                <ImageWithFallback
                                    width={250}
                                    height={200}
                                    src={article.image !== 'None' ?  article.image : '/cloud_error.jpg'}
                                    alt={article.title}
                                />
                            </div>
                            <div className="content-container">
                                <h3 className='article-title'>{article.title}</h3>
                                <div className='article-desc'>
                                    <p>{article.description}</p>
                                </div>
                                <div className='article-date'>
                                    <span>{formattedDate}</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div className='main-right'>
                <div className="source-container">
                    <div className="source-header">
                        <RocketLaunch className="rocket-icon" />
                        <span className="source-title">Popular Sites</span>
                    </div>
                    {sourcesToShow.map((source) => (
                        <div key={source.id} className="source-card">
                            <Link href={source.url} className="source-name">
                                {source.name}
                            </Link>
                            <span className="source-desc">{source.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}