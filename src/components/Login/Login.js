import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form mb-5">
            <div>
                <h2>Please Login</h2>
                <form>
                <br />
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password"/>
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new here? <Link to="/register">Create Account</Link></p>
                <div> Or You Can Choose</div>
                <button
                    className="btn btn-success"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
          
        </div>
    );
};

export default Login;