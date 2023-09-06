import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const posts = [
        { id: 1, message: "Hi, how are you?", likes: 15 },
        { id: 2, message: "It's my first post", likes: 20 },
        { id: 3, message: "It's my second post", likes: 9 },
        { id: 4, message: "It's my twenty post", likes: 452 },
        { id: 5, message: "It's my eight post", likes: 7 }
    ];

    const postsElements = posts.map(p => <Post message={p.message} likes={p.likes} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;