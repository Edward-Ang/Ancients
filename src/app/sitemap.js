export default function sitemap() {
    return [
        {
            url: 'https://www.ancientsnews.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://www.ancientsnews.com/technology',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://www.ancientsnews.com/business',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: 'https://www.ancientsnews.com/entertainment',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: 'https://www.ancientsnews.com/sports',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://www.ancientsnews.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
    ]
}