import React from 'react';
import s from './MessagesPersonLeft.module.css';

const MessagesPersonLeft = (props) => {
    return (
        <div className={s.message}>
            <div className={s.photo}>photo</div>
            <p className={s.text}>{props.messagesPersonLeft}</p>
        </div>
    );
};

export default MessagesPersonLeft;