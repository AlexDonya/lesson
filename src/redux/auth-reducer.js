import { authAPI } from "../components/api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return { ...state, ...action.data, isAuth: true, };
		case LOGIN_USER:
			return { ...state, userId: action.userId, isAuth: true };
		case LOGOUT_USER:
			return {
				...state,
				userId: null,
				email: null,
				login: null,
				isAuth: false
			};
		default:
			return state;
	}
}

// actionCreators
export const setAuthUserData = (userId, email, login) => ({
	type: SET_USER_DATA,
	data: { userId, email, login }
});

export const setLoginUserId = (userId) => ({
	type: LOGIN_USER,
	userId
});

const logOutUserAC = () => ({
	type: LOGOUT_USER
})

// thunkCreators
export const authMe = () => (dispatch) => {
	authAPI.authMe()
		.then((data) => {
			if (data.resultCode === 0) {
				let { id, email, login } = data.data;
				dispatch(setAuthUserData(id, email, login));
			}
		});
}

export const logInUser = (email, password, rememberMe) => (dispatch) => {
	authAPI.authLogIn(email, password, rememberMe)
		.then((data) => {
			if (data.resultCode === 0) {
				let { userId } = data.data;
				dispatch(setLoginUserId(userId))
			}
		})
}

export const logOutUser = () => (dispatch) => {
	authAPI.authLogOut()
		.then((data) => {
			if (data.resultCode === 0) {
				dispatch(logOutUserAC())
			}
		})
}

export default authReducer;