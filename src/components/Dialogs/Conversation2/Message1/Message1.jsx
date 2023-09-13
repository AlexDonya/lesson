import React from 'react';
import s from './Message1.module.css';

const Message1 = (props) => {
    return (
        <div className={s.message}>
            <div className={s.photo}>photo</div>
            <p className={s.text}>{props.message1}</p>
        </div>
    );
};

export default Message1;