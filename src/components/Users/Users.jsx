import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user-photo.png";

const Users = (props) => {

  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  return (
    <div className={s.container}>
      {props.users.map((u) => {
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
      })}
    </div>
  );
};

export default Users;
