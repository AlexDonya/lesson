import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavContainer from './components/Nav/NavContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import LoginContainer from './components/Login/LoginContainer';

function App() {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<News />} />
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/login' element={<LoginContainer />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
