import Link from 'next/link';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p className='copyright-text'>&copy; 2024 Ancients News. All rights reserved.</p>
                </div>
                <div className="footer-right">
                    <ul className="footer-links-list">
                        <li className='footer-links-item'>
                            <Link className='footer-links' href="/about">
                                <span className='footer-links-text'>About</span>
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link className='footer-links' href="/contact">
                                <span className='footer-links-text'>Contact</span>
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link className='footer-links' href="/privacy">
                                <span className='footer-links-text'>Privacy Policy</span>
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link className='footer-links' href="/terms">
                                <span className='footer-links-text'>Terms of Service</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
