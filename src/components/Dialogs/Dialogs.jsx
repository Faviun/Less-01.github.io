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

let dialogsData = [
    {id: 1, name: 'Loh1'},
    {id: 2, name: 'Loh2'},
    {id: 3, name: 'Loh3'},
    {id: 4, name: 'Loh4'},
    {id: 5, name: 'Loh5'},
    {id: 6, name: 'Loh6'}
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hi123'},
    {id: 3, message: 'Hi54'},
    {id: 4, message: 'Hi45'},
    {id: 5, message: 'Hi87'}
]

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    )
}

export default Dialogs;