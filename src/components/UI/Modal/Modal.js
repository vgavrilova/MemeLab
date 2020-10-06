import React from 'react';

import style from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';


const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} closeTemplates={props.closeTemplates}/>
        <div className={style.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
    
);


export default modal;