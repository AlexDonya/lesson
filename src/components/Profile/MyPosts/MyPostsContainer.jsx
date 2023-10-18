import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';

// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();

//                 const onAddPost = () => {
//                     store.dispatch(addPostCreator());
//                 };

//                 const onPostChange = (text) => {
//                     store.dispatch(updateNewPostTextCreator(text));
//                 }

//                 return <MyPosts addPost={onAddPost}
//                     updateNewPostText={onPostChange}
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText} />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// };

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;