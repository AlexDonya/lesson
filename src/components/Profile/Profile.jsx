import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    // console.log(props.profile);
    return (
        <main className={s.profileInfo}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer profile={props.profile} />
        </main>
    );
};

export default Profile;