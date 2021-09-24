import React from 'react';
import ExperienceCard from './ExperienceCard';
import volunteerExperienceData from '../../../assets/resume_eng.json';

import './workExperience.styles.css';

const VolunteerExperience = () => {

    return (
        <div className="workExperienceContainer">
            <h3 className='experienceTitle'>{volunteerExperienceData.sectionTitles[1]}</h3>
            {
                volunteerExperienceData.volunteerExperience.map((e, index) => {
                    return(
                        <ExperienceCard
                            key={index}
                            jobTitle={e.jobTitle}
                            companyName={e.companyName}
                            duration={e.duration}
                            companyLocation={e.companyLocation} 
                            task={e.task} 
                            data={e.taskDetails}                          
                        /> 
                    )                     
                })
            }
        </div>
    );
}

export default VolunteerExperience;
