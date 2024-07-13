import Link from 'next/link';
import './header.css';

export default function Header() {
    return (
        <header>
            <div className='header-container'>
                <Link className='header-name-container' href='/'>
                    <h1 className='header-name'>Ancients</h1>
                </Link>
                <nav>
                    
                </nav>
            </div>
        </header>
    );
}