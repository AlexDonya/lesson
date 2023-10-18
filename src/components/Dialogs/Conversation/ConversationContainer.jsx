import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import Conversation from './Conversation';
import StoreContext from '../../../StoreContext';

const ConversationContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage;

            const addMessage = () => {
                store.dispatch(addMessageActionCreator());
            }

            const onMessageChange = (text) => {
                let action = updateNewMessageTextActionCreator(text);
                store.dispatch(action);
            }

            return <Conversation updateNewMessageText={onMessageChange}
                addMessage={addMessage}
                conversation={state.conversation}
                newMessageText={state.newMessageText} />
        }}
    </StoreContext.Consumer>
};

export default ConversationContainer;