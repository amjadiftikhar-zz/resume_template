import React from 'react';
import Objective from './components/objective.components/Objective';
import Profile from './components/profile.components/Profile';
import WorkExperience from './components/experience.components/WorkExperience';
import CVProjects from './components/projects.components/CVProjects';
import Skills from './components/skills.components/Skills';
import Certificates from './components/certificates.components/Certificates';
import Languages from './components/language.components/Languages';
import References from './components/references.components/References';
import VolunteerExperience from './components/experience.components/VolunteerExperience';
import EducationExperience from './components/experience.components/EducationExperience';

import './resume.styles.css';

const Resume = () => {

    return (
        <div className='resumeContainer' >
            <div className="leftSection">
                <Profile/>
                <Skills/>
                <Certificates/>
                <Languages/>
                <References/>
            </div>
            <div className="rightSection">
                <Objective/>
                <WorkExperience/>
                <VolunteerExperience/>
                <CVProjects/>
                <EducationExperience/>
            </div>
        </div>
    );
}

export default Resume;
