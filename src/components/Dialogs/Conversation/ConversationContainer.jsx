import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import Conversation from './Conversation';

const ConversationContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    const onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return <Conversation updateNewMessageText={onMessageChange}
        addMessage={addMessage}
        conversation={state.conversation}
        newMessageText={state.newMessageText} />
};

export default ConversationContainer;