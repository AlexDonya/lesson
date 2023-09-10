import React from 'react';
import s from './Conversation2.module.css';
import Message1 from './Message1/Message1';
import Message2 from './Message2/Message2';

const Conversation2 = (props) => {

    const messages1Elements = props.conversation2.messages1.map(m => <Message1 message1={m.message} />);
    const messages2Elements = props.conversation2.messages2.map(m => <Message2 message2={m.message} />);

    return (
        <div className={s.conversation}>
            <div className={s.messages1}>
                {messages1Elements}
            </div>
            <div className={s.messages2}>
                {messages2Elements}
            </div>
        </div>
    );
};

export default Conversation2;