import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import BigPhoto from './BigPhoto';

const ProfileInfo = (props) => {
    const [photoActive, setPhotoActive] = useState(false);

    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div>
                <img src="https://img.freepik.com/premium-photo/beach-vacation-aerial-drone-view-tropical-white-sandy-bavaro-beach-
                punta-cana-dominican-republic-amazing-landscape-with-palms-umbrellas-turquoise-water-atlantic-ocean-wide-
                format_136401-4046.jpg?w=2000" alt="" />
            </div>
            <div className={s.info}>
                <div>{props.profile.fullName}</div>
                <div className={s.imageProfile}>
                    <img src={props.profile.photos.large} alt="smallPhoto" className={s.photo} onClick={() => setPhotoActive(true)} />
                    <BigPhoto active={photoActive} setActive={setPhotoActive} bigPhoto={props.profile.photos.large} />
                </div>
                <div className={s.descriptionBlock}>{props.profile.aboutMe}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;