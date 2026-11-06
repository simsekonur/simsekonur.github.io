import { interests, languages } from '../content';

const sectionTitleStyle = {
    color: '#4A90E2',
    fontSize: '13px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    borderBottom: '1px solid #3a4056',
    paddingBottom: '8px',
    marginBottom: '16px',
};

export default function ExtrasSection() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', width: '100%', maxWidth: '900px', margin: '0 auto 40px', padding: '0 16px' }}>
            <div style={{ flex: '1 1 300px' }}>
                <h2 style={sectionTitleStyle}>Interests</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {interests.map((item, i) => (
                        <span key={i} style={{
                            background: '#2d3748',
                            color: '#e2e8f0',
                            borderRadius: '4px',
                            padding: '4px 12px',
                            fontSize: '13px'
                        }}>{item}</span>
                    ))}
                </div>
            </div>
            <div style={{ flex: '1 1 200px' }}>
                <h2 style={sectionTitleStyle}>Languages</h2>
                {languages.map((l, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', color: '#a0aec0', fontSize: '14px', marginBottom: '6px' }}>
                        <span style={{ color: 'white' }}>{l.lang}</span>
                        <span style={{ color: '#718096' }}>{l.level}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

