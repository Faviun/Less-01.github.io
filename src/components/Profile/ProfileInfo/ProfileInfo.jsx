import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.1zoom.ru/big2/92/101562-yana.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;