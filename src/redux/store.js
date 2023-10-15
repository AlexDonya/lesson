import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            newMessageText: 'New message...',
            conversation1: {
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;