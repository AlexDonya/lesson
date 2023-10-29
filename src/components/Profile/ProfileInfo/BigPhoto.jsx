import React from 'react';
import s from './ProfileInfo.module.css';

const BigPhoto = ({ active, setActive, ...props }) => {
    return (
        <div className={active ? `${s.bigPhotoWrapper} ${s.active}` : s.bigPhotoWrapper} onClick={() => setActive(false)}>
            <img className={active ? `${s.bigPhoto} ${s.active}` : s.bigPhoto} src={props.bigPhoto} alt="bigPhoto"
                onClick={e => { e.stopPropagation() }} />
        </div>
    );
};

export default BigPhoto;