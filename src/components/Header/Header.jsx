import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    // console.log(props.userId);
    return (
        <header className={s.header}>
            <a href="">
                <img className={s.header__logo}
                    src="https://www.freepnglogos.com/uploads/youtube-shorts-logo-png/red-shorts-png-logo-with-play-icon-0.png"
                    alt="" />
            </a>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Log in</NavLink>}
            </div>
        </header>
    );
};

export default Header;