export const postState = [];

const userInfo = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;

export const initialState = {
    user: userInfo,
    token: token,
    isAuth: token ? true : false,
    loading: false,
    error: null,
};
