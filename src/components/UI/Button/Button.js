import React from 'react';

import style from './Button.module.css';



const button = (props) => (
    
<button className={style.btn}>{props.children}</button>

);

export default button;