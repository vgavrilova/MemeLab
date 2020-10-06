import React from 'react';
import Aux from '../Aux';

import style from './NavBar.module.css';
import Logo from '../../components/NavBar/Logo/Logo';


const navBar = (props) => (
    <Aux>
        <ul className={style.NavBar}>
            <li className={style.NavItem}><a href="/">All Templates</a></li>
            <li><Logo /></li>
            <li className={style.NavItem}><a href="/">Create a Meme</a></li>
        </ul>
        
        <main className={style.Content}>
            {props.children}
        </main>
    </Aux>
);


export default navBar;