'use client';

import Link from 'next/link';
import { useState } from 'react';
import SearchBar from "@/components/search/search";
import { Search } from '@mui/icons-material';
import './header.css';

export default function Header() {
    const [showSearch, setShowSearch] = useState(false);
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
                                <Link href="/category?category=general" className='nav-link'>
                                    General
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/category?category=technology" className='nav-link'>
                                    Technology
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/category?category=business" className='nav-link'>
                                    Business
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/category?category=entertainment" className='nav-link'>
                                    Entertainment
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/category?category=sports" className='nav-link'>
                                    Sports
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/category?category=health" className='nav-link'>
                                    Health
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/category?category=science" className='nav-link'>
                                    Science
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <button className='search-btn' onClick={(e) => {setShowSearch(!showSearch)}}>
                        <Search className='search-icon' />
                    </button>
                </div>
            </header>
            {showSearch && (
                <SearchBar />
            )}
        </>
    );
}