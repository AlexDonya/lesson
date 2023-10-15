import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://img.freepik.com/premium-photo/beach-vacation-aerial-drone-view-tropical-white-sandy-bavaro-beach-punta-cana-dominican-republic-amazing-landscape-with-palms-umbrellas-turquoise-water-atlantic-ocean-wide-format_136401-4046.jpg?w=2000" alt="" />
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;