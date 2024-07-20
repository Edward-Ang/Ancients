'use client';

import { Suspense, useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';
import SearchBar from "@/components/search/search";
import { Search, DensityMedium } from '@mui/icons-material';
import categories from '@/assets/data/categories.json';
import './header.css';
import './headerMedia.css';

function HeaderContent() {
  const [showSearch, setShowSearch] = useState(false);
  const [showDropDown, setShowDropdown] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const mobileMedia = useMediaQuery({ maxWidth: 600 });
  const mediumMedia = useMediaQuery({ minWidth: 601, maxWidth: 899 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navLinks = useMemo(() => categories.slice(0, 7).map(cat => (
    <li key={cat} className="nav-item">
      <Link
        href={`/${cat.name}`}
        className='nav-link'
        style={{ color: category === cat.name ? 'var(--orange)' : undefined }}
      >
        {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
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
          {isClient && !mobileMedia && !mediumMedia && (
            <nav className='nav-bar'>
              <ul className="nav-list">
                {navLinks}
              </ul>
            </nav>
          )}
          <div className='btn-container'>
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
            {isClient && (mobileMedia || mediumMedia) && (
              <button className='more-btn' onClick={() => setShowDropdown(!showDropDown)}>
                <DensityMedium className='more-icon' style={{ color: showDropDown ? 'var(--orange)' : undefined }} />
              </button>
            )}
          </div>
        </div>
      </header>
      {isClient && showDropDown && (
        <div className='dropdown-wrapper'>
          <div className="dropdown-container">
            {categories.map((topic, index) => (
              <Link key={index}
                href={`/category?category=${topic.name}`}
                className="dropdown-card"
                style={{ color: category === topic.name ? 'var(--orange)' : undefined }}
                onClick={() => setShowDropdown(!showDropDown)}>
                <span className="dropdown-name">{topic.name.charAt(0).toUpperCase() + topic.name.slice(1)}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
      {isClient && showSearch && <SearchBar />}
    </>
  );
}

export default function Header() {
  return (
    <Suspense fallback={<div></div>}>
      <HeaderContent />
    </Suspense>
  );
}