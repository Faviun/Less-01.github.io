import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">loh 1</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">loh 2</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">loh 3</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">loh 4</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">loh 5</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Ho ho ho</div>
                <div className={s.message}>Bye</div>
            </div>
        </div>
    )
}

export default Dialogs;