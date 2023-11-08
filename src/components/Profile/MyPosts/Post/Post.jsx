import React from 'react';
import s from './Post.module.css';
import Preloader from '../../../common/Preloader/Preloader';
import profilePhoto from '../../../../assets/images/user-photo.png'

const Post = (props) => {
    let profile = props.profile;
    return (
        <div className={s.item}>
            {profile === null ?
                <Preloader /> :
                <img src={props.profile.photos.large ? props.profile.photos.large : profilePhoto} />}
            {props.message}
            <div>
                <span><span className={s.heartSymbol}>❤️</span> {props.likes} likes</span>
            </div>
        </div>
    );
};

export default Post;