import Section from './Section';
import { about } from '../content';

export default function AboutSection() {
    return (
        <Section title="About">
            <p style={{ color: '#cbd5e0', fontSize: '15px', lineHeight: '1.8', textAlign: 'left' }}>{about}</p>
        </Section>
    );
}

