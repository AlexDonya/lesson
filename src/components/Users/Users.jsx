import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

    let users = [
        {
            id: 1,
            imgUrl: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=2000',
            followed: true,
            fullName: "Marcus",
            status: 'Attention! All people, I like to play in basketball!!!',
            location: { country: 'Poland', city: 'Warsaw' }
        },
        {
            id: 2,
            imgUrl: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
            followed: true,
            fullName: "Alexey",
            status: "I'm looking for a job right now...",
            location: { country: 'Ukraine', city: 'Zaporizhzhia' }
        },
        {
            id: 3,
            imgUrl: 'https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg',
            followed: true,
            fullName: "Alina",
            status: "I love so much my pretty kitty ;) <3",
            location: { country: 'Ukraine', city: 'Zaporizhzhia' }
        },
        {
            id: 4,
            imgUrl: 'https://img.freepik.com/premium-vector/man-character_665280-46970.jpg',
            followed: false,
            fullName: "Sasha",
            status: "I'm learning German and I'm lucky man)",
            location: { country: 'Germany', city: 'Dresden' }
        },
    ]
    if (props.users.length === 0) {
        props.setUsers(users);
    }

    return (
        <div className={s.container}>
            {
                props.users.map(u => {
                    return <div key={u.id} className={s.user}>
                        <div>
                            <img src={u.imgUrl} alt='avatar' className={s.ava} />
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                            </div>
                        </div>
                        <div className={s.info}>
                            <div className={s.infoIntoInfo}>
                                <span>{u.fullName}</span>
                                <span>{u.status}</span>
                            </div>
                            <div className={s.infoIntoInfo}>
                                <span>{u.location.country}</span>
                                <span>{u.location.city}</span>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Users;