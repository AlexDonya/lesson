let rerenderEntireTree = () => {
    console.log('State changed');
}

const state = {
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
}

window.state = state;

export const addPost = () => {
    const newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likes: 0
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;

