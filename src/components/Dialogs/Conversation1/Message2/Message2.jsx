import React from 'react';
import s from './Message2.module.css';

const Message2 = (props) => {
    return (
        <div className={s.message}>
            <p className={s.photo}>photo</p>
            <p className={s.text}>{props.message2}</p>
        </div>
    );
};

export default Message2;