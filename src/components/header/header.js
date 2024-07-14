import Link from 'next/link';
import { Search } from '@mui/icons-material';
import './header.css';

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <Link href="/" className="header-name-container">
                    <h1 className="header-name">Ancients</h1>
                </Link>
                <nav className='nav-bar'>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link href="/general" className='nav-link'>
                                General
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/technology" className='nav-link'>
                                Technology
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/business" className='nav-link'>
                                Business
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/entertainment" className='nav-link'>
                                Entertainment
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/sports" className='nav-link'>
                                Sports
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/health" className='nav-link'>
                                Health
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/science" className='nav-link'>
                                Science
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button className='search-btn'>
                    <Search className='search-icon' />
                </button>
            </div>
        </header>
    );
}