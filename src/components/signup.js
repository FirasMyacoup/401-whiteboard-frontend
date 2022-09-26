import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../App.css";
import cookies from 'react-cookies';



function Signup() {
    const handlesignUp = async (e) => {
        e.preventDefault();
        const user = {
            'username': e.target.username.value,
            'password': e.target.password.value,
            'email': e.target.email.value,
            'role': e.target.role.value
        };
        await axios.post(
            `${process.env.REACT_APP_HEROKU_URL}/signup`,user).then( (res) => {
            if (res.status === 200) {
                cookies.save('token', res.data.token);
                cookies.save('userID', res.data.userID);
                cookies.save('username', user.username);
                cookies.save('role', user.role);
                window.location.href = '/post';
            } 
        }).catch( (err) => {
            alert('Username or email already exists');
        } );
    };
    return (
        <>
        <div className="signup">
        <Form onSubmit={handlesignUp}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
                </div>
                <p>Have an account? <a href="/signin">Sign in now</a></p>

                <Button type="submit" className="btn-primary">SignUp</Button>
                
                </Form>
        </div>
        </>
        
    );
}

export default Signup;