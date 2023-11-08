import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user-photo.png";
import Preloader from "../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";
import axios from "axios";


const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= 20; i++) {
    pages = [...pages, i];
  }

  return (
    <div className={s.container}>
      <div className={s.pages}>
        {pages.map(p => {
          return (
            <span key={p}
              className={props.currentPage === p ? s.selectedPage : ''}
              onClick={() => props.onPageChanged(p)}>
              {p}
            </span>
          )
        })}
      </div>
      {
        props.isFetching ? <Preloader /> : props.users.map((u) => {
          return (
            <div key={u.id} className={s.user}>
              <div className={s.userInfoFirstPart}>
                <NavLink to={'/profile/' + u.id}>
                  <img src={u.photos.large != null
                    ? u.photos.large
                    : userPhoto} alt="avatar" className={s.ava} />
                </NavLink>
                <div>
                  {u.followed ? (
                    <button onClick={() => {

                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        { withCredentials: true })
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id)
                          }
                        });

                    }}>Unfollow
                    </button>)
                    : (
                      <button onClick={() => {

                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                          { withCredentials: true })
                          .then((response) => {
                            if (response.data.resultCode === 0) {
                              props.follow(u.id)
                            }
                          });

                      }}>Follow
                      </button>
                    )}
                </div>
              </div>
              <div className={s.userInfoSecondPart}>
                <div className={s.info}>
                  <span>{u.name}</span>
                  <span>{u.status}</span>
                </div>
                <div className={s.info}>
                  <span>{"u.location.country"}</span>
                  <span>{"u.location.city"}</span>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default Users;