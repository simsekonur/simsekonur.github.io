import React from 'react';
import Section from './Section';
import { experience } from '../content';

export default function ExperienceSection() {
    return (
        <Section id="experience" tag="03. Work History" title="Professional Experience">
            <div className="experience-list">
                {experience.map((job, idx) => (
                    <article key={idx} className="experience-card">
                        <div className="exp-header">
                            <div>
                                <span className="exp-title">{job.title}</span>
                                <span className="exp-company"> · {job.company}</span>
                            </div>
                            <span className="exp-period">{job.period}</span>
                        </div>

                        <div className="exp-meta">
                            <span>{job.type}</span>
                            <span>•</span>
                            <span>{job.location}</span>
                        </div>

                        {job.highlight && (
                            <div className="exp-highlight-bar">
                                ⭐ {job.highlight}
                            </div>
                        )}

                        <ul className="exp-bullets">
                            {job.bullets.map((bullet, bIdx) => (
                                <li key={bIdx}>{bullet}</li>
                            ))}
                        </ul>

                        {job.techStack && (
                            <div className="tech-tag-group">
                                {job.techStack.map((tech, tIdx) => (
                                    <span key={tIdx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </Section>
    );
}
