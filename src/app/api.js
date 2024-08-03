export default async function getData(category) {
    const apiKey = process.env.NEWS_API_KEY;

    // Early return if API key is missing
    if (! apiKey) {
        console.error('API key is missing.');
        return {articles: []};
    }

    try {
        const response = await fetch(`https://api.currentsapi.services/v1/search?category=${category}&apiKey=${apiKey}`, {
            next: {
                revalidate: 3600
            }
        });

        if (! response.ok) {
            throw new Error(`Failed to fetch data. Status: ${
                response.status
            }`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching data:', error);
        return {articles: []};
    }
}
