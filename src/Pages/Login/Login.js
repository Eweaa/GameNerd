import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../Auth/auth-slice";
import LoginCSS from './Login.module.css';

const Login = () => {
    const dispatch = useDispatch();
    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch(authActions.login())
    }
    return(
        <div className={LoginCSS.LoginPage}>
            <div className={LoginCSS.leftDiv}>
                
            </div>
            <div className={LoginCSS.rightDiv}>
                <div>
                    <h1>Login to Outer Heaven.</h1>
                    <form onSubmit={HandleSubmit}>
                        <input type='email' placeholder='Email'/>
                        <input type='password' placeholder='Password' minLength='8' maxLength='64'/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;