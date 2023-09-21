import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import { Route, Routes } from 'react-router-dom';
import Conversation from './Conversation/Conversation';
import ConversationContainer from './Conversation/ConversationContainer';

const Dialogs = (props) => {

    let dialogsPage = props.store.getState().dialogsPage;
    const dialogsElements = dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);

    // console.log(props.store);
    // console.log(dialogsPage);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <Routes>
                    <Route path='1' element={<ConversationContainer
                        store={props.store}
                        dispatch={props.store.dispatch}
                        conversation={dialogsPage.conversation}
                        newMessageText={dialogsPage.newMessageText} />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dialogs;