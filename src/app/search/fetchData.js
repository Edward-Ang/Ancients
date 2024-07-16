
const fetchData = async (query) => {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY; // Consider using an environment variable
    const baseUrl = 'https://newsapi.org/v2/everything';

    // Construct URL parameters
    const params = new URLSearchParams({
        sortBy: 'publishedAt',
        language: 'en',
        q: query,
        apiKey: apiKey
    });

    const url = `${baseUrl}?${params}`;

    try {
        console.log('Fetching from URL:', url); // For debugging
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log('Articles:', data.articles);
            return data;
        } else {
            throw new Error(`API responded with status ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching articles:', error);
        return { articles: [] };
    }
};

export default fetchData;