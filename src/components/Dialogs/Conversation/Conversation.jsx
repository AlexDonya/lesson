import React from 'react';
import s from './Conversation.module.css';
import MessagesPersonLeft from './MessagesPersonLeft/MessagesPersonLeft';
import MessagesPersonRight from './MessagesPersonRight/MessagesPersonRight';

const Conversation = (props) => {

    let state = props.dialogsPage;
    // console.log(state);

    const messagesPersonLeft = props.conversation.messagesPersonLeft.map(m =>
        <MessagesPersonLeft key={m.id} messagesPersonLeft={m.message} />);
    const messagesPersonRight = props.conversation.messagesPersonRight.map(m =>
        <MessagesPersonRight key={m.id} messagesPersonRight={m.message} />);

    const onAddMessage = () => {
        props.addMessage();
    }

    const onNewMessageChange = (e) => {
        const text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.conversation}>
            <div className={s.messagesPersonLeft}>
                {messagesPersonLeft}
            </div>
            <div className={s.messagesPersonRight}>
                {messagesPersonRight}
            </div>
            <textarea onChange={onNewMessageChange}
                value={props.newMessageText} placeholder='New message...' ></textarea>
            <div>
                <button onClick={onAddMessage}>Send</button>
            </div>
        </div>
    );
};

export default Conversation;