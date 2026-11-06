import Section from './Section';
import { skills } from '../content';

const groups = [
    { label: 'Languages', items: skills.languages },
    { label: 'Backend & Frameworks', items: skills.backendFrameworks },
    { label: 'Frontend', items: skills.frontend },
    { label: 'Databases & Search', items: skills.databases },
    { label: 'Testing & Automation', items: skills.testingAutomation },
    { label: 'Tools & Infrastructure', items: skills.tools },
];

export default function SkillsSection() {
    return (
        <Section title="Technical Skills">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {groups.map((g, i) => (
                    <div key={i} style={{ textAlign: 'left', minWidth: '200px' }}>
                        <div style={{ color: '#a0aec0', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                            {g.label}
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {g.items.map((item, j) => (
                                <span key={j} style={{
                                    background: '#2d3748',
                                    color: '#e2e8f0',
                                    borderRadius: '4px',
                                    padding: '3px 10px',
                                    fontSize: '13px',
                                    fontWeight: '500'
                                }}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

