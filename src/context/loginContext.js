import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import base64 from 'base-64';
import cookie from 'react-cookies';

const LoginContext = createContext();

export const useLoginContext = () => useContext(LoginContext);

const LoginProvider = props => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [error, setError] = useState(null);
    

    const login = async (username, password) => {
        const encoded = base64.encode(`${username}:${password}`);
        await axios.post(
            `${process.env.REACT_APP_HEROKU_URL}/signin`,
            {},
            {
                headers: {
                    'Authorization': `Basic ${encoded}`
                }
            }
        ).then ( (res) => {
            if (res.status === 200) {
                cookie.save('token', res.data.token);
                cookie.save('user_id', res.data.user.id);
                cookie.save('username', res.data.user.username);
                setToken(res.data.token);
                setUser(res.data.user);
                setLoggedIn(true);
            }
        } ).catch( (err) => {
            setError(err);
        }
        );
    };

    const logout = () => {
        cookie.remove('token');
        cookie.remove('user_id');
        cookie.remove('username');
        setToken('');
        setUser({});
        setLoggedIn(false);
    };

    const can = (capability) => {
        return user?.capabilities?.includes(capability);
    };

    const state = {
        loggedIn,
        user,
        token,
        error,
        login,
        logout,
        can
    };

    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;