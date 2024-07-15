//.src/components/search/search.js

'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import './search.css';

export default function Search() {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        if (query.trim()) {
            router.push(`/search?query=${query}`);
        }
    };

    return (
        <div className="search-wrapper">
            <div className="search-container">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for articles..."
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}
