import React from 'react';
import Section from './Section';
import { about, personalInfo } from '../content';

export default function AboutSection() {
    return (
        <Section id="about" tag="01. Profile" title="About Me">
            <div style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '28px 32px',
                textAlign: 'left'
            }}>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '15.5px',
                    lineHeight: '1.8',
                    margin: '0 0 20px'
                }}>
                    {about}
                </p>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-subtle)'
                }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        color: 'var(--text-muted)'
                    }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>📍</span>
                        <span>{personalInfo.location}</span>
                    </div>

                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        color: 'var(--text-muted)'
                    }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>⏱️</span>
                        <span>{personalInfo.timezone}</span>
                    </div>

                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        color: 'var(--text-muted)'
                    }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>🌐</span>
                        <span>English (Professional) · Turkish (Native)</span>
                    </div>
                </div>
            </div>
        </Section>
    );
}
