import axios from 'axios';

const fetchData = async (query) => {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY; // Consider using an environment variable
    const baseUrl = 'https://newsapi.org/v2/top-headlines';

    // Construct URL parameters
    const params = new URLSearchParams({
        country: 'us',
        q: query,
        apiKey: apiKey
    });

    const url = `${baseUrl}?${params}`;

    try {
        console.log('Fetching from URL:', url); // For debugging
        const response = await axios.get(url);

        if (response.status === 200) {
            console.log('Articles:', response.data.articles);
            return response.data;
        } else {
            throw new Error(`API responded with status ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching articles:', error);
        return { articles: [] };
    }
};

export default fetchData;