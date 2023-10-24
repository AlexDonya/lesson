import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../../redux/dialogs-reducer';
import Conversation from './Conversation';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        conversation: state.dialogsPage.conversation,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextCreator(text));
        },
    }
}

const ConversationContainer = connect(mapStateToProps, mapDispatchToProps)(Conversation);

export default ConversationContainer;