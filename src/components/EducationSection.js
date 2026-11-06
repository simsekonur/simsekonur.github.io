import Section from './Section';
import { education } from '../content';

export default function EducationSection() {
    return (
        <Section title="Education">
            {education.map((edu, i) => (
                <div key={i} style={{
                    background: '#1e2233',
                    borderRadius: '10px',
                    padding: '16px 24px',
                    marginBottom: '12px',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '4px'
                }}>
                    <div>
                        <div style={{ color: 'white', fontWeight: '700', fontSize: '15px' }}>{edu.school}</div>
                        <div style={{ color: '#a0aec0', fontSize: '13px' }}>{edu.degree}{edu.gpa ? ` · ${edu.gpa}` : ''}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ color: '#718096', fontSize: '13px' }}>{edu.location}</div>
                        {edu.years && <div style={{ color: '#718096', fontSize: '12px' }}>{edu.years}</div>}
                    </div>
                </div>
            ))}
        </Section>
    );
}

