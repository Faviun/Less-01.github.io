import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Loh1'},
        {id: 2, name: 'Loh2'},
        {id: 3, name: 'Loh3'},
        {id: 4, name: 'Loh4'},
        {id: 5, name: 'Loh5'},
        {id: 6, name: 'Loh6'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi123'},
        {id: 3, message: 'Hi54'},
        {id: 4, message: 'Hi45'},
        {id: 5, message: 'Hi87'}
    ]

    let dialogsElements = dialogs.map( d=> <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = messages.map( m => <Message message={m.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;