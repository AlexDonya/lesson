import React, { useEffect } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ConversationContainer from './Conversation/ConversationContainer';

const Dialogs = (props) => {
  const navigate = useNavigate();

  const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem
    key={d.id}
    name={d.name}
    id={d.id} />);

  useEffect(() => {
    if (!props.isAuth) {
      return navigate('/login');
    }
  }, [navigate, props.isAuth]);


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