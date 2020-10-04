import React from 'react';

import style from './Input.module.css';


const input = (props) => (
    <input 
        className={style.Input}
        type="text" 
        placeholder="Type caption">
    </input>
);


export default input;