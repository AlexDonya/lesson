import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    // отрисовка постов
    const postsElements = props.posts.map(p => <Post key={p.id}
        message={p.message}
        likes={p.likes} />)

    // создаем новый пост
    const newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div> 
                    <textarea onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
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