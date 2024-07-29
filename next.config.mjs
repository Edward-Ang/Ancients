const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: '/_next/static/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=3600, must-revalidate', // Cache for 1 hour
                    },
                ]
            }, {
                source: '/static/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=3600, must-revalidate', // Cache for 1 hour
                    },
                ]
            },
        ];
    },
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