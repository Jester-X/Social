import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import SendMessageForm from './SendMessageForm/SendMessageForm'

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    let sendMessage = (values) => {
        props.sendMessage(values.newMessageValue)
    }

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
                <SendMessageForm sendMessage={sendMessage} />
            </div>
        </div>
    )
}


export default Dialogs;