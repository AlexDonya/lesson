import React from 'react';
import s from './Post.module.css';
import Preloader from '../../../common/Preloader/Preloader';

const Post = (props) => {
    let profile = props.profile;
    return (
        <div className={s.item}>
            {profile === null ? <img src='' alt='photoProfile' /> : <img src={props.profile.photos.large} />}
            {props.message}
            <div>
                <span>{props.likes} likes</span>
            </div>
        </div>
    );
};

export default Post;