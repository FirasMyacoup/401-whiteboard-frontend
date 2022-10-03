import axios from "axios";
import base64 from "base-64";
import  cookies  from "react-cookies";
import swal from 'sweetalert';
import { useLoginContext } from '../context/loginContext';

function Signin () {
    const context = useLoginContext();
    const handleLogin = async ( e ) => {
        e.preventDefault();
        const encoded = base64.encode(`${e.target.username.value}:${e.target.password.value}`);
        await axios.post(`${process.env.REACT_APP_HEROKU_URL}/signin`,{},{
            headers: {
                'Authorization': `Basic ${encoded}`
            }
        }).then( ( res ) => {
            if ( res.status === 200 ) {
                cookies.save( 'token', res.data.token );
                cookies.save( 'user_id', res.data.user.id );
                cookies.save( 'username', res.data.user.username );
                cookies.save( 'role', res.data.user.role );
          swal( 'Welcome', `Welcome ${res.data.user.username}`, 'success' );
            }
            window.location.href = '/posts';

        } ).catch( ( err ) => {
            swal( 'Error', `${err}`, 'error' );
        } );
    };

    return ( 
        <div className="signin">
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
        
                <p>Don't have an account? <a href="/signup">Sign up now</a></p>
                <button type="submit" >SignIn</button>
            </form>
            </div>
    );
}

export default Signin;