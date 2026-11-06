import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import AboutSection from './components/AboutSection';
import CompetenciesSection from './components/CompetenciesSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <main className="container-custom">
                <Introduction />
                <AboutSection />
                <CompetenciesSection />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
                <EducationSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
