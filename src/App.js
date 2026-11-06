import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Introduction from './components/Introduction';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ExtrasSection from './components/ExtrasSection';

export default function App() {
    return (
        <div className="App" style={{ paddingBottom: '60px' }}>
            <Introduction
                name="Onur Şimşek"
                role="Senior Software Engineer"
                subtitle="Implementation & Integration · Backend & Full-Stack · Remote / Global Teams"
            />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
            <ExtrasSection />
        </div>
    );
}
