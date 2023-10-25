import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user-photo.png";

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages = [...pages, i];
  }

  return <div className={s.container}>
    <div className={s.pages}>
      {pages.map(p => {
        return <span key={p} className={props.currentPage === p ? s.selectedPage : ''}
          onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
      })}
    </div>
    {
      props.users.map((u) => {
        return (
          <div key={u.id} className={s.user}>
            <div>
              <img src={u.photos.small != null
                ? u.photos.small
                : userPhoto} alt="avatar" className={s.ava} />
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className={s.info}>
              <div className={s.infoIntoInfo}>
                <span>{u.name}</span>
                <span>{u.status}</span>
              </div>
              <div className={s.infoIntoInfo}>
                <span>{"u.location.country"}</span>
                <span>{"u.location.city"}</span>
              </div>
            </div>
          </div>
        );
      })
    }
  </div>
}

export default Users;