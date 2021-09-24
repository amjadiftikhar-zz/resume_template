import React from 'react';

import './objective.styles.css';

const ObjectiveCard = (props) => {

    return (
        <div className="objectiveCard">
            <h1 className="cvTitle"> {props.myName} </h1>
            <h3 className="cvJobTitle"> {props.jobTitle} </h3>
            <p className='objectiveText'>
               {props.objective}
            </p>
        </div>
    );
}

export default ObjectiveCard;
