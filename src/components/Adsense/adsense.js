'use client';
import { useEffect } from 'react';

export default function Adsense() {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {
            console.error('AdSense error:', e);
          }
    }, []);

    return (
        <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4401208396170022"
        data-ad-slot="3387983882"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    );
}