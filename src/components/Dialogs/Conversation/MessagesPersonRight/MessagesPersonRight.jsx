import React from 'react';
import s from './MessagesPersonRight.module.css';

const MessagesPersonRight = (props) => {
    return (
        <div className={s.message}>
            <div className={s.photo}>photo</div>
            <p className={s.text}>{props.messagesPersonRight}</p>
        </div>
    );
};

export default MessagesPersonRight;