import React from 'react';
import s from '../UI/Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <a href="">
                <img className={s.header__logo} src="https://www.freepnglogos.com/uploads/youtube-shorts-logo-png/red-shorts-png-logo-with-play-icon-0.png" alt="" />
            </a>
        </header>
    );
};

export default Header;