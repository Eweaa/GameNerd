import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../Auth/auth-slice";
import LoginCSS from './Login.module.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext";

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const HandleSubmit = async e => {
        e.preventDefault();
        
        try {
            setError(' ')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch  {
            setError('Failed to sign in')
        }
        setLoading(false)
    }
    
    // const dispatch = useDispatch();

    // const HandleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(authActions.login())
    // }

    return(
        <div className={LoginCSS.LoginPage}>
            <div className={LoginCSS.leftDiv}>
                
            </div>
            <div className={LoginCSS.rightDiv}>
                <div>
                    <h1>Login to Outer Heaven.</h1>
                    <form onSubmit={HandleSubmit}>
                        <input type='email' placeholder='Email' ref={emailRef}/>
                        <input type='password' placeholder='Password' minLength='6' maxLength='64' ref={passwordRef}/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;