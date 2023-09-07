import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    const posts = [
        { id: 1, message: "Hi, how are you?", likes: 15 },
        { id: 2, message: "It's my first post", likes: 20 },
        { id: 3, message: "It's my second post", likes: 9 },
        { id: 4, message: "It's my twenty post", likes: 452 },
        { id: 5, message: "It's my eight post", likes: 7 }
    ];

    return (
        <main>
            <ProfileInfo />
            <MyPosts posts={posts} />
        </main>
    );
};

export default Profile;