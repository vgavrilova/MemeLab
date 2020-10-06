import React from 'react';

import style from './ArrowBtns.module.css';
import Aux from '../../../hoc/Aux';

const arrowBtns = (props) => (
    <Aux>
        <button 
            className={[style.arrowLeft, style.Arrows].join(' ')}
            onClick={props.showPrevious}>
                <i className="fas fa-angle-left"></i>
            </button>
            <button 
            className={[style.arrowRight, style.Arrows].join(' ')}
            onClick={props.showNext}>
                <i className="fas fa-angle-right"></i>
        </button>
    </Aux>
);


export default arrowBtns;