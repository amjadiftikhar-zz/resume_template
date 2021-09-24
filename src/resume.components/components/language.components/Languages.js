import React from 'react';
import LanguageCard from './LanguageCard';
import languageData from '../../../assets/resume_eng.json';

import './language.styles.css';

const Languages = () => {

    return (
        <div className='languageSection'>
            <h3 className='languageTitle'>{languageData.sectionTitles[6]}</h3>
            <div className='languageCotainer'>
                {
                    languageData.languages.map((l, index) => {
                        return(
                            <LanguageCard
                                key={index}
                                languageName={l.language}
                                languageLevel={l.level}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Languages;
