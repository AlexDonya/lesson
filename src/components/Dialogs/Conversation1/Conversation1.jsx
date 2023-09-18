import React from 'react';
import s from './Conversation1.module.css';
import Message1 from './Message1/Message1';
import Message2 from './Message2/Message2';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/state';

const Conversation1 = (props) => {

    const messages1Elements = props.conversation1.messages1.map(m => <Message1 key={m.id} message1={m.message} />);
    const messages2Elements = props.conversation1.messages2.map(m => <Message2 key={m.id} message2={m.message} />);

    const newMessage = React.createRef();

    const addMessage = () => {
        // const text = newMessage.current.value;
        props.dispatch(addMessageActionCreator());
    }

    const onMessageChange = () => {
        const text = newMessage.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }
    debugger;

    return (
        <div className={s.conversation}>
            <div className={s.messages1}>
                {messages1Elements}
            </div>
            <div className={s.messages2}>
                {messages2Elements}
            </div>
            <textarea onChange={onMessageChange}
                ref={newMessage}
                value={props.newMessageText} ></textarea>
            <div>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    );
};

export default Conversation1;