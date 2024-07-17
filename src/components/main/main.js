import Link from "next/link";
import { ImageWithFallback } from "@/app/imgWithFallback";
import { RocketLaunch } from "@mui/icons-material";
import './main.css';

const categories = [
    {
        name: "world",
        color: "mojito",
    },
    {
        name: "regional",
        color: "mojito", 
    },
    {
        name: "politics",
        color: "malibu",
    },
    {
        name: "finance",
        color: "malibu",
    },
    {
        name: "academia",
        color: "lime",
    },
    {
        name: "programming",
        color: "lime",
    },
    {
        name: "lifestyle",
        color: "azure",
    },
    {
        name: "food",
        color: "azure",
    },
    {
        name: "opinion",
        color: "peach",
    },
    {
        name: "game",
        color: "peach",
    }
];

export default function Main({ data }) {
    const articlesToShow = data.news.filter((article) =>
        article.description !== "mojito" && article.url !== 'https://removed.com' && article.image !== 'None'
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
                        <Link key={article.url || index} className="news-card" href={article.url}>
                            <div className="img-container">
                                <ImageWithFallback
                                    width={250}
                                    height={200}
                                    src={article.image !== 'None' ? article.image : '/cloud_error.jpg'}
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
                        <span className="source-title">Other Topics</span>
                    </div>
                    <div className="topic-container">
                        {categories.map((topic, index) => (
                            <Link key={index}
                                href={`/category?category=${topic.name}`}
                                className="source-name"
                                style={{ background: `var(--${topic.color})` }}>
                                <span>{topic.name.charAt(0).toUpperCase() + topic.name.slice(1)}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}