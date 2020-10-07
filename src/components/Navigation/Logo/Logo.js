import React from 'react';

import Logo from '../../../assets/Logo/Logo-MemeLab.png';
import style from './Logo.module.css';


const logo = (props) => (
    <div className={style.Logo}>
        <img src={Logo} alt="Logo" />
    </div>
);


export default logo;