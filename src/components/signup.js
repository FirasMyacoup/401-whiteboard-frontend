import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Signup () {
    const { handleSignUp, setSignup } = useAuth();
    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <form onSubmit={( e ) => handleSignUp( e )}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" name="confirmPassword" id="confirmPassword" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select name="role">
                        <option value="user" defaultValue='user'>USER</option>
                        <option value="admin">ADMIN</option>
                    </select>
                </div>
                <button type="submit" >Signup</button>
            </form>
            <p>Already have an account? <Link to ="/" onClick={() => {setSignup(false)}}>Sign in now</Link></p>
        </div>
    );
}

export default Signup;