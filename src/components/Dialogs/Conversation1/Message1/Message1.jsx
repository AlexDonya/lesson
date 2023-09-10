import React from 'react';
import s from './Message1.module.css';

const Message1 = (props) => {
    return (
        <div className={s.message}>
            <p className={s.photo}>photo</p>
            <p className={s.text}>{props.message1}</p>
        </div>
    );
};

export default Message1;