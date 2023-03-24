import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';;

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://www.1zoom.ru/big2/92/101562-yana.jpg' />
            </div>
            <div>
                Ava + desxription
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;