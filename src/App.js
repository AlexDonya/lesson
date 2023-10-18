import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavContainer from './components/Nav/NavContainer';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    < div className='app-wrapper' >
      <Header />
      <NavContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
