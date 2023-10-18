import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../../redux/dialogs-reducer';
import Conversation from './Conversation';
// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';

// const ConversationContainer = () => {
//     return <StoreContext.Consumer>
//         {(store) => {
//             let dialogsPage = store.getState().dialogsPage;

//             const onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator());
//             }

//             const onNewMessageChange = (text) => {
//                 store.dispatch(updateNewMessageTextCreator(text));
//             }

//             return <Conversation
//                 addMessage={onSendMessageClick}
//                 updateNewMessageText={onNewMessageChange}
//                 conversation={dialogsPage.conversation}
//                 newMessageText={dialogsPage.newMessageText} />
//         }}
//     </StoreContext.Consumer>
// };

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