import React from 'react';
import s from '../UI/Profile.module.css';

const Profile = () => {
    return (
        <main className={s.profile}>
            <img className={s.profile__img} src="https://img.freepik.com/premium-photo/beach-vacation-aerial-drone-view-tropical-white-sandy-bavaro-beach-punta-cana-dominican-republic-amazing-landscape-with-palms-umbrellas-turquoise-water-atlantic-ocean-wide-format_136401-4046.jpg?w=2000" alt="" />
            <div>ava + description</div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;