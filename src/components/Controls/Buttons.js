import React from 'react';

import style from './Buttons.module.css';



const buttons = (props) => {

    return (
        <div className={style.Controls}>
            <button 
                className={style.btn}
                onClick={props.showTemplates}>
                Templates
            </button>
            <button 
                className={[style.btn, style.GenBtn].join(' ')} 
                onClick={props.generate}>Generate</button>
        </div>
    );

};


export default buttons;