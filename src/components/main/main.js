import Link from "next/link";
import { ImageWithFallback } from "@/app/imgWithFallback";
import { RocketLaunch } from "@mui/icons-material";
import ImageError from '@/assets/images/404.jpg';
import category from '@/assets/data/categories.json';
import Adsense from "../Adsense/adsense";
import './main.css';
import './mainMedia.css';

export default function Main({ data }) {
    const articlesToShow = data.news.filter((article) =>
        article.description !== "mojito" && article.url !== 'https://removed.com' &&
        article.image !== 'None' && article.language === 'en'
    );

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
                        <Link key={article.url || index} className="news-card" href={article.url} target="_blank" rel="noopener noreferrer">
                            <div className="img-container">
                                <ImageWithFallback
                                    width={250}
                                    height={200}
                                    src={article.image !== 'None' ? article.image : ImageError}
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
{/*                 <div className="ads-container">
                    <Adsense />
                </div> */}
                <div className="topic-wrapper">
                    <div className="topic-header">
                        <RocketLaunch className="rocket-icon" />
                        <span className="topic-title">Other Topics</span>
                    </div>
                    <div className="topic-container">
                        {category.slice(7).map((topic, index) => (
                            <Link key={index}
                                href={`/${topic.name}`}
                                className="topic-card"
                                style={{ background: `var(--${topic.color})` }}>
                                <span className="topic-name">{topic.name.charAt(0).toUpperCase() + topic.name.slice(1)}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}