import React from 'react';

import './skill.styles.css';

const SkillCard = (props) => {

    return (
        <div className="cvSkillCard">
            {props.skill}
        </div>
    );
}

export default SkillCard;
