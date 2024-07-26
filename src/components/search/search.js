'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import './search.css';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (query.trim()) {
            router.push(`/search?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <div className="search-wrapper">
            <div className="search-container">
                <form className="search-form" onSubmit={handleSearch}>
                    <input
                        className="search-input"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for articles..."
                        required
                    />
                </form>
            </div>
        </div>
    );
}