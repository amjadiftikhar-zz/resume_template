import React from 'react';
import ObjectiveCard from './ObjectiveCard';
import objectiveData from '../../../assets/resume_eng.json';

import './objective.styles.css';

const Objective = () => {

    return (
        <div className="objectiveSection">
            { objectiveData.objective.map((o, index) => {
                return(
                    <ObjectiveCard
                        key={index}
                        myName={o.name}
                        jobTitle={o.jobTitle}
                        objective={o.objective}
                    />
                )
            })}
        </div>
    )
}

export default Objective;

