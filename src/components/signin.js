import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Signin () {
    const { handleSignIn, setSignup } = useAuth();

    return (
        <div className="signin">
            <h1>Sign In</h1>
            <form onSubmit={( e ) => handleSignIn( e )}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="form-group">
                <button type="submit" >SignIn</button>
                </div>
            </form>
            <p>Don't have an account? <Link to='/' onClick={() => {setSignup(true)}}>Sign up now</Link></p>
        </div>
    );
}

export default Signin;