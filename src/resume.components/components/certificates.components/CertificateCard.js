import React from 'react';

import './certificates.styles.css';

const CertificateCard = (props) => {

    return (
        <div className='certificateCard'> 
            <span className='certificateName'>
                {props.contentDuration}
            </span>
            <ul className="certificateDescription">
                <li>
                    {props.contentDescription}
                </li>
            </ul>            
        </div>
    )
}

export default CertificateCard;