import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import StoreContext from '../../StoreContext';

const Nav = (props) => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState();
            const friends = state.sidebar.friends.map(f => <Friend
                key={f.id}
                name={f.name}
                id={f.id} />)

            return (
                <nav className={s.nav}>
                    <div className={s.item}>
                        <NavLink to='/' className={({ isActive }) =>
                            isActive ? s.active : ""
                        }>Profile</NavLink>
                    </div>
                    <div className={`${s.item} ${s.active}`}>
                        <NavLink to='/dialogs' className={({ isActive }) =>
                            isActive ? s.active : ""
                        }>Messages</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/news' className={({ isActive }) =>
                            isActive ? s.active : ""
                        }>News</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/music' className={({ isActive }) =>
                            isActive ? s.active : ""
                        }>Music</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/settings' className={({ isActive }) =>
                            isActive ? s.active : ""
                        }>Settings</NavLink>
                    </div>
                    <div className={s.friendsBlock}>
                        <h2 className={s.titleFriends}>Friends</h2>
                        <div className={s.friends}>
                            {friends.slice(1, 4)}
                        </div>
                    </div>
                </nav>
            )
        }
        }
    </StoreContext.Consumer >
};

export default Nav;