import React from 'react';
import CertificateCard from './CertificateCard';
import './certificates.styles.css';

import certificatesData from '../../../assets/resume_eng.json';

const Certificates = () => {

    return (
        <div className='certificateSection'>
            <h3 className='cvCertificateTitle'>{certificatesData.sectionTitles[5]}</h3>
            <div className='certificateContainer'>
                {certificatesData.certificates.map((c, index) => {
                    return(
                        <CertificateCard                  
                            key={index}
                            contentDuration={c.duration}
                            contentDescription={c.description}
                        />
                    )
                })} 
            </div>           
        </div>
    )
}

export default Certificates;
