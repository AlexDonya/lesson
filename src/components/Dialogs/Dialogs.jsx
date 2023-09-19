import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Conversation1 from './Conversation1/Conversation1';
import Conversation2 from './Conversation2/Conversation2';

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <Routes>
                    <Route path='1' element={<Conversation1 conversation1={props.dialogsPage.conversation1} newMessageText={props.dialogsPage.newMessageText} dispatch={props.dispatch} />} />
                    <Route path='2' element={<Conversation2 conversation2={props.dialogsPage.conversation2} />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dialogs;