import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    
    return (
        <main>
            <ProfileInfo />
            <MyPosts newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText} posts={props.profilePage.posts} addPost={props.addPost} />
        </main>
    );
};

export default Profile;