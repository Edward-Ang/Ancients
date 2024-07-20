export default async function getData(category) {
    const apiKey = process.env.NEWS_API_KEY;
    try {
        const response = await fetch(`https://api.currentsapi.services/v1/search?category=${category}&apiKey=${apiKey}`, {
            next: { revalidate: 86400 } // Optional: for caching and revalidation in 24 hrs
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching data:', error);
        return { articles: [] };
    }
}
