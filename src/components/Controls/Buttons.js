import React from 'react';

import Button from '../UI/Button/Button';
import style from './Buttons.module.css';



const buttons = (props) => (
    <div className={style.Controls}>
        <Button>Templates</Button>
        <Button>Generate</Button>
    </div>
   
);


export default buttons;