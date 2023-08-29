import React from 'react';
import s from '../Post/Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg" />
            {props.message}
            <div>
                <span>{props.likes} likes</span>
            </div>
        </div>
    );
};

export default Post;