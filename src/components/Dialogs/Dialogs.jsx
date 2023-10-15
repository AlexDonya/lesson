import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import { Route, Routes } from 'react-router-dom';
import ConversationContainer from './Conversation/ConversationContainer';
import StoreContext from '../../StoreContext';

const Dialogs = (props) => {
    return <StoreContext.Consumer>
        {(store) => {
            let dialogsPage = store.getState().dialogsPage;

            const dialogsElements = dialogsPage.dialogs.map(d => <DialogItem
                key={d.id}
                name={d.name}
                id={d.id} />);

            return (
                <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        {dialogsElements}
                    </div>
                    <div className={s.messages}>
                        <Routes>
                            <Route path='1' element={<ConversationContainer
                                store={store}
                                dispatch={store.dispatch}
                                conversation={dialogsPage.conversation}
                                newMessageText={dialogsPage.newMessageText} />} />
                        </Routes>
                    </div>
                </div>
            )
        }
        }
    </StoreContext.Consumer>
};

export default Dialogs;