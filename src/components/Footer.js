import React from 'react';
import { personalInfo } from '../content';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-wrap">
            <button onClick={scrollToTop} className="back-to-top-btn" type="button">
                ↑ Back to Top
            </button>
            <div>
                Designed & Built by <strong>{personalInfo.name}</strong> · Senior Software Engineer
            </div>
            <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.4)' }}>
                Powered by React & modern web standards
            </div>
        </footer>
    );
}

