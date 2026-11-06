import React from 'react';
import Section from './Section';
import { skills } from '../content';

const categoryConfig = [
    { label: 'Frontend & Full-Stack UI', items: skills.frontend, icon: '🖥️' },
    { label: 'Backend & Microservices', items: skills.backendFrameworks, icon: '⚙️' },
    { label: 'Core Languages', items: skills.languages, icon: '{ }' },
    { label: 'Databases & Ingestion', items: skills.databases, icon: '💾' },
    { label: 'Testing & Automation', items: skills.testingAutomation, icon: '🧪' },
    { label: 'DevOps & Tooling', items: skills.tools, icon: '🚀' }
];

export default function SkillsSection() {
    return (
        <Section id="skills" tag="05. Technical Stack" title="Skills & Technologies">
            <div className="skills-grid">
                {categoryConfig.map((cat, idx) => (
                    <div key={idx} className="skill-category-card">
                        <div className="skill-category-title">
                            <span>{cat.icon} {cat.label}</span>
                            <span style={{ color: 'var(--text-muted)', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                                ({cat.items.length})
                            </span>
                        </div>
                        <div className="skill-pill-wrap">
                            {cat.items.map((skill, sIdx) => (
                                <span key={sIdx} className="skill-pill">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
