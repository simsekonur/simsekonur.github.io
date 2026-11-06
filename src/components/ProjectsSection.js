import React from 'react';
import Section from './Section';
import { featuredProjects } from '../content';

export default function ProjectsSection() {
    return (
        <Section id="systems" tag="04. Architecture & Impact" title="Featured Systems Built">
            <div className="project-grid">
                {featuredProjects.map((project, idx) => (
                    <div key={idx} className="project-card">
                        <div>
                            <div className="project-company">{project.company}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <span className="project-metric-pill">⚡ {project.metric}</span>
                            <p className="project-desc">{project.description}</p>
                        </div>
                        <div className="tech-tag-group">
                            {project.tags.map((tag, tIdx) => (
                                <span key={tIdx} className="tech-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

