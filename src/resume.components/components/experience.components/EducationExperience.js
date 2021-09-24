import React from 'react';
import ExperienceCard from './ExperienceCard';
import './workExperience.styles.css';
import educationData from '../../../assets/resume_eng.json';

const EducationExperience = () => {
    
    return (
        <div className="workExperienceContainer">
            <h3 className='experienceTitle'>{educationData.sectionTitles[3]}</h3>
            {
                educationData.education.map((e, index) => {
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

export default EducationExperience;
