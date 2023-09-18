import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';


const MyPosts = (props) => {
    // отрисовка постов
    const postsElements = props.posts.map(p => <Post key={p.id}
        message={p.message}
        likes={p.likes} />)

    // создаем новый пост
    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
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
                    <button onClick={addPost}>Add post</button>
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