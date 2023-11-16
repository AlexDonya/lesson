import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const API = {
  getUser(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then((resposne) => resposne.data)
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`)
      .then((resposne) => resposne.data)
  },
  follow(id) {
    return instance.post(`follow/${id}`)
      .then((resposne) => resposne.data)
  },
}

export const profileAPI = {
  getUserProfile(id) {
    return instance.get(`profile/${id}`)
      .then((resposne) => resposne.data)
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`)
      .then((resposne) => resposne.data)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  }
}

export const authAPI = {
  auth() {
    return instance.get(`auth/me`)
      .then((resposne) => resposne.data)
  },
}