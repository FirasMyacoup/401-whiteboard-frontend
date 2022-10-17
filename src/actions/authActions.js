import axios from "axios";


export const signin = ( dispatch, payload ) => {
    
    dispatch({type: 'LOGIN_REQUEST'});
    axios.post(
       `${process.env.REACT_APP_HEROKU_URL}/signin`,
       {},
       {
           headers: {
               'Authorization': `Basic ${payload}`
           }
       }
       
   ).then( ( res ) => {
       dispatch({type: "LOGIN_SUCCESS", payload: res.data})

    } ).catch( ( err ) => {
        dispatch({type: "LOGIN_FAILURE", payload: err})
    }
    );
};

