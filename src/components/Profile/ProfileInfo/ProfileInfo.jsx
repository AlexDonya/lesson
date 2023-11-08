import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import OpenUserProfilePhoto from './OpenUserProfilePhoto';
import profilePhoto from '../../../assets/images/user-photo.png';

const ProfileInfo = (props) => {
    const [photoActive, setPhotoActive] = useState(false);

    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div className={s.infoContainer}>
            <div className={s.info}>
                <h3>{props.profile.fullName}</h3>
                <div className={s.photoUserProfileContainer}>
                    <img className={s.photoUserProfile}
                        src={props.profile.photos.large ? props.profile.photos.large : profilePhoto}
                        alt="userProfilePhoto" onClick={() => setPhotoActive(true)} />
                    <OpenUserProfilePhoto active={photoActive} setActive={setPhotoActive}
                        userProfilePhoto={props.profile.photos.large} />
                </div>
                <div className={s.description}>{props.profile.aboutMe}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;