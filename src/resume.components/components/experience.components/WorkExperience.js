import React from 'react';
import ExperienceCard from './ExperienceCard';
import experienceData from '../../../assets/resume_eng.json';

import './workExperience.styles.css';

const WorkExperience = () => {

    return (
        <div className="workExperienceContainer">
            <h3 className='experienceTitle'> {experienceData.sectionTitles[0]} </h3>
            {
                experienceData.experience.map((e, index) => {
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

export default WorkExperience;
