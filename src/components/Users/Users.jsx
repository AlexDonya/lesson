import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user-photo.png";

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages = [...pages, i];
    }

    return (
      < div className={s.container} >
        <div className={s.pages}>
          {pages.map(p => {
            return <span key={p} className={this.props.currentPage === p ? s.selectedPage : ''}
              onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
          })}
        </div>
        {
          this.props.users.map((u) => {
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
                          this.props.unfollow(u.id);
                        }}
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          this.props.follow(u.id);
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
      </div >
    )
  }
}

export default Users;