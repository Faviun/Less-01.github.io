import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>loh 1</div>
                <div className={s.dialog}>loh 2</div>
                <div className={s.dialog}>loh 3</div>
                <div className={s.dialog}>loh 4</div>
                <div className={s.dialog}>loh 5</div>
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