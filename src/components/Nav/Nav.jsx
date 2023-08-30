import React from 'react';
import s from './Nav.module.css';
console.log(s);
// let s = {
//     'nav': 'Nav_nav__PyPBf',
//     'item': 'Nav_item__KjERa',
// }

let c1 = 'item';
let c2 = 'active';
// 'item active';
let classes = c1 + ' ' + c2;
// console.log(classes);
let classesNew = `${c1} ${c2}`;
// console.log(classesNew);
// console.log(`${s.item} ${s.active}`);

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><a>Profile</a></div>
            <div className={`${s.item} ${s.active}`}><a>Messages</a></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>
        </nav>
    );
};

export default Nav;