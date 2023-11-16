import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

    return (
        <main className={s.profile}>
            {/* <div>
                <img src="https://img.freepik.com/premium-photo/beach-vacation-aerial-drone-view-tropical-white-sandy-bavaro-beach-
                punta-cana-dominican-republic-amazing-landscape-with-palms-umbrellas-turquoise-water-atlantic-ocean-wide-
                format_136401-4046.jpg?w=2000" alt="" />
            </div> */}
            <div className={s.profileContainer}>
                <ProfileInfo {...props} profile={props.profile} />
                <MyPostsContainer profile={props.profile} />
            </div>
        </main>
    );
};

export default Profile;