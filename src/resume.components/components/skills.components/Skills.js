import React from 'react'
import SkillCard from './SkillCard';
import skillsData from '../../../assets/resume_eng.json';

import './skill.styles.css';

const Skills = () => {

    return (
        <div className="cvSkillSection">
            <h3 className='cvSkillsTitle'>{skillsData.sectionTitles[4]}</h3>
            <div className="cvSkillsContainer">
                {skillsData.skills.map((s, index) => {
                return( 
                        <SkillCard 
                            skill={s}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Skills;