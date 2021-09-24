import React from 'react';
import LanguageCard from '../language.components/LanguageCard';
import referenceData from '../../../assets/resume_eng.json';

import './references.styles.css';

const References = () => {

    return (
        <div className='referencesection'>
            <h3 className='referenceTitle'>{referenceData.sectionTitles[7]}</h3>
            <div className='referenceCotainer'>
                {
                    referenceData.references.map((r, index) => {
                        return(
                            <LanguageCard
                                key={index}
                                languageName={r.reference}
                                languageLevel={r.email}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default References;
