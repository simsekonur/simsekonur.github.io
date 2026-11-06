import React, { useState, useEffect } from 'react';
import cvFile from '../files/ONUR_SIMSEK_EN.pdf';

const navItems = [
    { href: '#about', label: 'About' },
    { href: '#competencies', label: 'Expertise' },
    { href: '#experience', label: 'Experience' },
    { href: '#systems', label: 'Systems' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPos = window.scrollY + 180;

            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.offsetTop <= scrollPos) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobile = () => setMobileOpen(prev => !prev);
    const closeMobile = () => setMobileOpen(false);

    return (
        <header className="navbar-glass">
            <div className="navbar-container">
                <a href="#home" className="brand-monogram">
                    <span>&lt;</span>OS <span>/&gt;</span>
                </a>

                {/* Desktop Nav */}
                <nav>
                    <ul className="nav-links">
                        {navItems.map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href={item.href}
                                    className={`nav-link-item ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <a
                        href={cvFile}
                        download="ONUR_SIMSEK_EN.pdf"
                        className="nav-resume-btn"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Resume
                    </a>

                    {/* Mobile Toggle Button */}
                    <button
                        className="mobile-toggle-btn"
                        onClick={toggleMobile}
                        aria-label="Toggle Navigation"
                        type="button"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {mobileOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <div className="mobile-drawer">
                    <ul className="mobile-nav-list">
                        {navItems.map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href={item.href}
                                    className={`mobile-nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                                    onClick={closeMobile}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
