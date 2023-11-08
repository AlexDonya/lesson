import React from 'react';
import s from './ProfileInfo.module.css';
import profilePhoto from '../../../assets/images/user-photo.png'

const OpenUserProfilePhoto = ({ active, setActive, userProfilePhoto }) => {
    return (
        <div className={active ? `${s.userProfilePhotoContainer} ${s.active}` : s.userProfilePhotoContainer}
            onClick={() => setActive(false)}>
            <img className={active ? `${s.userProfilePhoto} ${s.active}` : s.userProfilePhoto}
                src={userProfilePhoto ? userProfilePhoto : profilePhoto} alt="userProfilePhoto"
                onClick={e => e.stopPropagation()} />
        </div>
    );
};

export default OpenUserProfilePhoto;