import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Conversation1 from './Conversation1/Conversation1';
import Conversation2 from './Conversation2/Conversation2';

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <Routes>
                    <Route path='1' element={<Conversation1 conversation1={props.state.conversation1} />} />
                    <Route path='2' element={<Conversation2 conversation2={props.state.conversation2} />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dialogs;