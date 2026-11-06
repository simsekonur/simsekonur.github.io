import React from 'react';
import { SocialIcon } from 'react-social-icons';
import cvFile from '../files/ONUR_SIMSEK_EN.pdf';
import { personalInfo, metrics } from '../content';

export default function Introduction() {
    return (
        <section id="home" className="hero-wrapper">
            {/* Live Availability Status Pill */}
            <div className="status-badge">
                <span className="status-dot" />
                <span>{personalInfo.status}</span>
            </div>

            {/* Avatar */}
            <div className="avatar-container">
                <img
                    src="/avatar.jpg"
                    alt={personalInfo.name}
                    className="avatar-img"
                />
            </div>

            {/* Name & Titles */}
            <h1 className="hero-name">{personalInfo.name}</h1>
            <h2 className="hero-role">{personalInfo.title}</h2>
            <p className="hero-subtitle">{personalInfo.subtitle}</p>

            {/* Action Buttons */}
            <div className="hero-actions">
                <a href="#contact" className="btn-primary-action">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Get In Touch
                </a>

                <a
                    href={cvFile}
                    download="ONUR_SIMSEK_EN.pdf"
                    className="btn-secondary-action"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download CV
                </a>

                <div className="social-pill-group">
                    <SocialIcon
                        url={personalInfo.github}
                        bgColor="transparent"
                        fgColor="#cbd5e1"
                        style={{ width: '38px', height: '38px' }}
                    />
                    <SocialIcon
                        url={personalInfo.linkedin}
                        bgColor="transparent"
                        fgColor="#cbd5e1"
                        style={{ width: '38px', height: '38px' }}
                    />
                    <SocialIcon
                        url={`mailto:${personalInfo.email}?Subject=Senior%20Engineering%20Opportunity`}
                        bgColor="transparent"
                        fgColor="#cbd5e1"
                        style={{ width: '38px', height: '38px' }}
                    />
                </div>
            </div>

            {/* Metrics Bar */}
            <div className="metrics-grid">
                {metrics.map((m, idx) => (
                    <div key={idx} className="metric-card">
                        <div className="metric-value">{m.value}</div>
                        <div className="metric-label">{m.label}</div>
                        <div className="metric-sub">{m.description}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
