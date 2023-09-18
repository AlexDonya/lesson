const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likes: 15 },
                { id: 2, message: "It's my first post", likes: 20 },
                { id: 3, message: "It's my second post", likes: 9 },
                { id: 4, message: "It's my twenty post", likes: 452 },
                { id: 5, message: "It's my eight post", likes: 7 }
            ],
            newPostText: 'New post text...',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Sveta" },
                { id: 4, name: "Sasha" },
                { id: 5, name: "Viktor" },
                { id: 6, name: "Valera" }
            ],
            conversation1: {
                newMessageText: 'New message...',
                messages1: [
                    { id: 1, message: "Hi!" },
                    { id: 2, message: "How are you?" },
                    { id: 3, message: "Yo!" },
                    // { id: 4, message: "Cool!" },
                    // { id: 5, message: "Fine!" },
                    // { id: 6, message: "Go play basketball!" }
                ],
                messages2: [
                    // { id: 1, message: "Hi!" },
                    // { id: 2, message: "How are you?" },
                    // { id: 3, message: "Yo!" },
                    { id: 4, message: "Cool!" },
                    { id: 5, message: "Fine!" },
                    { id: 6, message: "Go play basketball!" }
                ],
            },
            conversation2: {
                messages1: [
                    // { id: 1, message: "Hi!" },
                    // { id: 2, message: "How are you?" },
                    // { id: 3, message: "Yo!" },
                    { id: 4, message: "Cool!" },
                    { id: 5, message: "Fine!" },
                    { id: 6, message: "Go play basketball!" }
                ],
                messages2: [
                    { id: 1, message: "Hi!" },
                    { id: 2, message: "How are you?" },
                    { id: 3, message: "Yo!" },
                    // { id: 4, message: "Cool!" },
                    // { id: 5, message: "Fine!" },
                    // { id: 6, message: "Go play basketball!" }
                ],
            },
        },
        sidebar: {
            friends: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Sveta" },
                { id: 4, name: "Sasha" },
                { id: 5, name: "Viktor" },
                { id: 6, name: "Valera" }
            ]
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            const newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likes: 0
            }

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

        if (action.type === ADD_MESSAGE) {
            const newMessage = {
                id: 4,
                message: this._state.dialogsPage.conversation1.newMessageText
            }

            this._state.dialogsPage.conversation1.messages1.push(newMessage);
            this._state.dialogsPage.conversation1.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.conversation1.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

window.state = store;

export default store;