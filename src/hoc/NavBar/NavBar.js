import React from 'react';
import Aux from '../Aux';

import style from './NavBar.module.css';


const navBar = (props) => (
    <Aux>
        <div>Item</div><div>logo</div><div>Item</div>
        <main className={style.Content}>
            {props.children}
        </main>
    </Aux>
);


export default navBar;