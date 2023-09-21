import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import Conversation from './Conversation';

const ConversationContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    const addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    const onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return <Conversation updateNewMessageText={onMessageChange}
        addMessage={addMessage}
        dialogsPage={state}
        conversation={props.conversation}
        newMessageText={props.newMessageText} />;
};

export default ConversationContainer;