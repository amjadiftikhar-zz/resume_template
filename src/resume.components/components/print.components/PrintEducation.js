import React, {useRef} from 'react';
import ReactToPrint from "react-to-print";
import './print.style.css';

const PrintEducation = (props) => {

    const componentRef = useRef();

    return (
        <div>
            <div className="printSource" ref={componentRef}>
                {props.children}
            </div>
            <ReactToPrint 
                trigger={() => <a href className="downloadClass"> Download resume </a>}
                content={() => componentRef.current}
            />
        </div>
    );
}

export default PrintEducation;







