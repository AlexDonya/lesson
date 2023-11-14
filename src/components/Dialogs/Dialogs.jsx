import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import { Route, Routes } from 'react-router-dom';
import ConversationContainer from './Conversation/ConversationContainer';

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem
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
          <Route path='1' element={<ConversationContainer />} />
        </Routes>
      </div>
    </div>
  )
};

export default Dialogs;