import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div>
                <img src="https://img.freepik.com/premium-photo/beach-vacation-aerial-drone-view-tropical-white-sandy-bavaro-beach-punta-cana-dominican-republic-amazing-landscape-with-palms-umbrellas-turquoise-water-atlantic-ocean-wide-format_136401-4046.jpg?w=2000" alt="" />
            </div>
            <div className={s.imageProfile}>
                <img src={props.profile.photos.large} alt="" />
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;