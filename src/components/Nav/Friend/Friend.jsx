import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    console.log();

    return (
        <div className={s.friend}>
            <div className={s.photo}>photo</div>
            <div className={s.name}>{props.name}</div>
        </div>
    );
};

export default Friend;