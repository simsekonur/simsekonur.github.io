import React from 'react';
import Section from './Section';
import { education, earlierExperience, interests, languages } from '../content';

export default function EducationSection() {
    return (
        <Section id="education" tag="06. Background" title="Education & Research">
            {/* Primary Degree */}
            {education.map((edu, idx) => (
                <div key={idx} className="edu-card">
                    <div className="edu-header">
                        <div>
                            <div className="edu-school">{edu.school}</div>
                            <div className="edu-degree">
                                {edu.degree}
                                {edu.gpa && <span className="edu-gpa">{edu.gpa}</span>}
                            </div>
                        </div>
                        <div style={{ textAlign: 'right', color: 'var(--text-muted)', fontSize: '13px' }}>
                            <div>{edu.location}</div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>{edu.years}</div>
                        </div>
                    </div>
                    {edu.highlights && (
                        <ul style={{ margin: '14px 0 0', paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: '1.7' }}>
                            {edu.highlights.map((h, hIdx) => (
                                <li key={hIdx}>{h}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}

            {/* Earlier Engineering Internships */}
            <div style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '20px 24px',
                textAlign: 'left',
                marginBottom: '16px'
            }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                    Earlier Research & Internships
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {earlierExperience.map((exp, idx) => (
                        <div key={idx} style={{ borderLeft: '2px solid var(--border-subtle)', paddingLeft: '14px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontSize: '13.5px' }}>
                                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{exp.role} · {exp.organization}</span>
                                <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>{exp.period}</span>
                            </div>
                            <p style={{ margin: '3px 0 0', color: 'var(--text-muted)', fontSize: '13px' }}>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Languages & Core Engineering Interests */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                <div style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '20px 24px',
                    textAlign: 'left'
                }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                        Languages
                    </div>
                    {languages.map((l, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px', marginBottom: '8px' }}>
                            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{l.lang}</span>
                            <span style={{ color: 'var(--text-muted)' }}>{l.level}</span>
                        </div>
                    ))}
                </div>

                <div style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '20px 24px',
                    textAlign: 'left'
                }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                        Focus Areas
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {interests.map((item, idx) => (
                            <span key={idx} className="skill-pill">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
