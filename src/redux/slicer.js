import { createSlice } from '@reduxjs/toolkit';

const firstState = {
username: '',
password: '',
isLogged: false,
error: null,
role: '',
loading: false,
};

const authSlice = createSlice({
name: 'auth',
firstState,
reducers: {
signin: (state, action) => {
state.username = action.payload.username;
state.password = action.payload.password;
state.isLogged = true;

},
signup: (state, action) => {
state.username = action.payload.username;
state.password = action.payload.password;
state.role = action.payload.role;
state.isLogged = true;
},
logout: (state, action) => {
state.username = '';
state.password = '';
state.isLogged = false;
},
setError: (state, action) => {
state.error = action.payload;
},
},
});
export const { signin } = authSlice.actions;
export const { signup } = authSlice.actions;
export const { logout } = authSlice.actions;
export const { setError } = authSlice.actions;

export default authSlice.reducer;

