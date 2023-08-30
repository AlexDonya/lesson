import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <main>
            <img src="https://img.freepik.com/premium-photo/beach-vacation-aerial-drone-view-tropical-white-sandy-bavaro-beach-punta-cana-dominican-republic-amazing-landscape-with-palms-umbrellas-turquoise-water-atlantic-ocean-wide-format_136401-4046.jpg?w=2000" alt="" />
            <div>ava + description</div>
            <MyPosts />
        </main>
    );
};

export default Profile;