import React from 'react';

import './language.styles.css';

const LanguageCard = (props) => {

    return (
        <div className='languageCard'>
            <span className='languageName'> {props.languageName} </span>
            <span className='languageLevel'> {props.languageLevel} </span>            
        </div>
    )
}

export default LanguageCard;
