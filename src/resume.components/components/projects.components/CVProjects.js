import React from 'react'
import CVProjectCard from './CVProjectCard';
import "./cvProjects.styles.css";
import projectsData from '../../../assets/resume_eng.json';

const CVProjects = () => {

    return (
        <div className="cvProjectSection">
            <h3 className='cvProjectTitle'>{projectsData.sectionTitles[2]}</h3>
            <div className="cvProjectContainer">
                {
                    projectsData.projects.map((p, index) => {
                        return(
                            <CVProjectCard
                                key={index}
                                contentDuration={p.duration}
                                contentDescription={p.description}
                            />
                        )
                    })
                } 
            </div>           
        </div>
    );
}

export default CVProjects;
