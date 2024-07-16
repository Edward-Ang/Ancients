'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import SearchBar from "@/components/search/search";
import { Search } from '@mui/icons-material';
import './header.css';

export default function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const searchParams = useSearchParams();
    const category = searchParams.get('category');

    return (
        <>
            <header>
                <div className="header-container">
                    <Link href="/" className="header-name-container">
                        <h1 className="header-name">Ancients</h1>
                    </Link>
                    <nav className='nav-bar'>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link href="/category?category=general"
                                    className='nav-link'
                                    style={{ color: category === 'general' && 'var(--orange)' }}>
                                    General
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/category?category=technology"
                                    className='nav-link'
                                    style={{ color: category === 'technology' && 'var(--orange)' }}>
                                    Technology
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/category?category=business"
                                    className='nav-link'
                                    style={{ color: category === 'business' && 'var(--orange)' }}>
                                    Business
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/category?category=entertainment"
                                    className='nav-link'
                                    style={{ color: category === 'entertainment' && 'var(--orange)' }}>
                                    Entertainment
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/category?category=sports"
                                    className='nav-link'
                                    style={{ color: category === 'sports' && 'var(--orange)' }}>
                                    Sports
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/category?category=health"
                                    className='nav-link'
                                    style={{ color: category === 'health' && 'var(--orange)' }}>
                                    Health
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/category?category=science"
                                    className='nav-link'
                                    style={{ color: category === 'science' && 'var(--orange)' }}>
                                    Science
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <button className='search-btn' onClick={(e) => { setShowSearch(!showSearch) }}>
                        <Search className='search-icon' style={{ color: showSearch && 'var(--orange)' }} />
                    </button>
                </div>
            </header >
            {showSearch && (
                <SearchBar />
            )
            }
        </>
    );
}