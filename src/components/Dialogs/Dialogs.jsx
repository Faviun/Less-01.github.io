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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Loh1" id="1"/>
                <DialogItem name="Loh2" id="2"/>
                <DialogItem name="Loh3" id="3"/>
                <DialogItem name="Loh4" id="4"/>
                <DialogItem name="Loh5" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Hello"/>
                <Message message="You"/>
                <Message message="Not"/>
                <Message message="Loh"/>
            </div>
        </div>
    )
}

export default Dialogs;