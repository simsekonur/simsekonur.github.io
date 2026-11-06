import { SocialIcon } from 'react-social-icons';
import cvFile from '../files/ONUR_SIMSEK_EN.pdf';

export default function Introduction({ name, role, subtitle }) {
    return (
        <div style={{ color: 'white', padding: '48px 24px 32px', textAlign: 'center' }}>
            <img
                src="/avatar.jpg"
                alt="Onur Şimşek avatar"
                style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid #4A90E2',
                    marginBottom: '20px',
                }}
            />
            <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-1px' }}>{name}</h1>
            <h3 style={{ fontSize: '20px', fontWeight: '400', color: '#a0aec0', marginBottom: '6px' }}>{role}</h3>
            {subtitle && <p style={{ fontSize: '14px', color: '#718096', marginBottom: '20px' }}>{subtitle}</p>}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <SocialIcon url='mailto:onursimsek0643@gmail.com?Subject=About%20meeting' bgColor='white' style={{ width: '40px', height: '40px' }} />
                <SocialIcon url='https://github.com/simsekonur' bgColor='white' style={{ width: '40px', height: '40px' }} />
                <SocialIcon url='https://www.linkedin.com/in/s-onur/' bgColor='white' style={{ width: '40px', height: '40px' }} />
            </div>
            <a
                href={cvFile}
                download="ONUR_SIMSEK_EN.pdf"
                style={{
                    display: 'inline-block',
                    padding: '10px 24px',
                    backgroundColor: '#4A90E2',
                    color: 'white',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    letterSpacing: '0.5px',
                }}
                onMouseOver={e => e.target.style.backgroundColor = '#357ABD'}
                onMouseOut={e => e.target.style.backgroundColor = '#4A90E2'}
            >
                Download CV
            </a>
        </div>
    );
}
