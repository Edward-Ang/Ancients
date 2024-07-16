'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, useMemo } from 'react';
import SearchBar from "@/components/search/search";
import { Search } from '@mui/icons-material';
import './header.css';

const categories = [
  'general',
  'technology',
  'business',
  'entertainment',
  'sports',
  'health',
  'science'
];

function HeaderContent() {
    const [showSearch, setShowSearch] = useState(false);
    const searchParams = useSearchParams();
    const category = searchParams.get('category');

    const navLinks = useMemo(() => categories.map(cat => (
      <li key={cat} className="nav-item">
        <Link 
          href={`/category?category=${cat}`}
          className='nav-link'
          style={{ color: category === cat ? 'var(--orange)' : undefined }}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </Link>
      </li>
    )), [category]);

    return (
        <>
            <header>
                <div className="header-container">
                    <Link href="/" className="header-name-container">
                        <h1 className="header-name">Ancients</h1>
                    </Link>
                    <nav className='nav-bar'>
                        <ul className="nav-list">
                            {navLinks}
                        </ul>
                    </nav>
                    <button 
                      className='search-btn' 
                      onClick={() => setShowSearch(!showSearch)}
                      aria-label="Toggle search"
                    >
                        <Search 
                          className='search-icon' 
                          style={{ color: showSearch ? 'var(--orange)' : undefined }} 
                        />
                    </button>
                </div>
            </header>
            {showSearch && <SearchBar />}
        </>
    );
}

export default function Header() {
    return (
        <Suspense fallback={<div>Loading header...</div>}>
            <HeaderContent />
        </Suspense>
    );
}