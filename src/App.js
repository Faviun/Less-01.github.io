import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Nav />
            {/*<Profile />*/}
            <div className={'app-wrapper-content'}>
                <Dialogs />
            </div>
        </div>);
}

export default App;
