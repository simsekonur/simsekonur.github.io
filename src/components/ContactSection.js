import React from 'react';
import Section from './Section';
import { personalInfo } from '../content';
import cvFile from '../files/ONUR_SIMSEK_EN.pdf';

export default function ContactSection() {
    return (
        <Section id="contact" tag="07. Next Steps" title="Get In Touch">
            <div className="contact-card">
                <h3 className="contact-title">Let's Discuss New Opportunities</h3>
                <p className="contact-subtitle">
                    I am actively considering Senior Full-Stack & Backend roles with globally distributed, remote-first engineering teams. Whether you have an open position or want to discuss architecture, feel free to reach out.
                </p>

                <div className="contact-button-row">
                    <a
                        href={`mailto:${personalInfo.email}?Subject=Senior%20Engineering%20Role%20Discussion`}
                        className="btn-primary-action"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        Send Email
                    </a>

                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary-action"
                    >
                        LinkedIn
                    </a>

                    <a
                        href={cvFile}
                        download="ONUR_SIMSEK_EN.pdf"
                        className="btn-secondary-action"
                    >
                        Download Resume
                    </a>
                </div>

                <div className="contact-details-row">
                    <div>📧 {personalInfo.email}</div>
                    <div>🌍 {personalInfo.timezone}</div>
                    <div>⚡ Fast response (within 24 hours)</div>
                </div>
            </div>
        </Section>
    );
}
