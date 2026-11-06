import Section from './Section';
import { experience } from '../content';

export default function ExperienceSection() {
    return (
        <Section title="Experience">
            {experience.map((job, i) => (
                <div key={i} style={{
                    background: '#1e2233',
                    borderRadius: '10px',
                    padding: '20px 24px',
                    marginBottom: '16px',
                    textAlign: 'left',
                    borderLeft: '3px solid #4A90E2'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px' }}>
                        <div>
                            <span style={{ color: 'white', fontWeight: '700', fontSize: '15px' }}>{job.title}</span>
                            <span style={{ color: '#4A90E2', fontWeight: '600', fontSize: '14px' }}> · {job.company}</span>
                        </div>
                        <span style={{ color: '#718096', fontSize: '13px', whiteSpace: 'nowrap' }}>{job.period}</span>
                    </div>
                    <div style={{ color: '#718096', fontSize: '12px', marginTop: '2px', marginBottom: '12px' }}>
                        {job.type} · {job.location}
                    </div>
                    <ul style={{ color: '#a0aec0', fontSize: '14px', lineHeight: '1.7', paddingLeft: '18px', margin: 0 }}>
                        {job.bullets.map((b, j) => <li key={j} style={{ marginBottom: '4px' }}>{b}</li>)}
                    </ul>
                </div>
            ))}
        </Section>
    );
}

