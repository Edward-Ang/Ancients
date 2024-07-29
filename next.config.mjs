// next.config.mjs

/* const nextConfig = {
    images: {
        domains: [
            'www.mobiflip.de',
            'eimg.pravda.com',
            '3dnews.ru',
            'www.washingtonpost.com',
            'ichef.bbci.co.uk',
            'techcrunch.com',
            'media.cnn.com',
            'a2.espncdn.com',
            'deadline.com',
            'dims.apnews.com',
            'media.cbs8.com',
            'sportshub.cbsistatic.com',
            // New domains added:
            'apnews.com',
            'reuters.com',
            'npr.org',
            'bbc.com',
            'theguardian.com',
            'nytimes.com',
            'aljazeera.com',
            'france24.com',
            'dw.com',
            'euronews.com',
            'cnn.com',
            'nbcnews.com',
            'cbsnews.com',
            'abcnews.go.com',
            'foxnews.com',
            'usatoday.com',
            'latimes.com',
            'chicagotribune.com',
            'bostonglobe.com',
            'wsj.com',
            'bloomberg.com',
            'businessinsider.com',
            'cnbc.com',
            'engadget.com',
            'theverge.com',
            'wired.com',
            'nationalgeographic.com',
            'scientificamerican.com'
        ],
    },
}; */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'
            },
        ],
        unoptimized: true
    }
};

export default nextConfig;
