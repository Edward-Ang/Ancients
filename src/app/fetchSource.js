
const fetchSource = async (category) => {
    const apiKey = process.env.NEWS_API_KEY || process.env.NEXT_PUBLIC_NEWS_API_KEY; // Consider using an environment variable
    const baseUrl = 'https://newsapi.org/v2/top-headlines/sources';

    // Construct URL parameters
    const params = new URLSearchParams({
        country: 'us',
        language: 'en',
        category: category,
        apiKey: apiKey
    });

    const url = `${baseUrl}?${params}`;

    try {
        console.log('Fetching from URL:', url); // For debugging
        const response = await fetch(url, { next: { revalidate: 86400 } });

        if (response.ok) {
            const data = await response.json();
            console.log('Sources:', data.sources);
            return data;
        } else {
            throw new Error(`API responded with status ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching sources:', error);
        return { sources: [] };
    }
};

export default fetchSource;