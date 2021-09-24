import React from 'react';
import TaskDescription from './TaskDescription';

import './workExperience.styles.css';

const ExperienceCard = (props) => {

    return (
        <div className='experienceMainCard'>
            <h4 className='cvExJobTitle'> {props.jobTitle} </h4>
            <h2 className='companyNameTitle'> {props.companyName} </h2>
            <div className="jobDetailSection">
                <div className='jobDetails'>
                    <div className='timePeriod'>
                        <span className='details'> {props.duration} </span>
                        <span className='details'> {props.task} </span>
                    </div>
                    <span className='details'> {props.companyLocation} </span>
                </div>
                <div className="taskDetails">
                    <ul className="taskDescription">
                        {props.data && props.data.map((td, index) => {
                            return(
                                <TaskDescription
                                    key={index}
                                    taskDescription={td}
                                />
                            )
                        })}
                    </ul> 
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;
