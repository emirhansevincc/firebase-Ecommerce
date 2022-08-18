import React from 'react'
import "./login.css"

import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase/firebase-config'

import { useNavigate } from "react-router-dom"

function Login({ setIsAuth, isAuth }) {

    let navigate = useNavigate()

    const login = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                if (auth.currentUser.displayName !== "Emirhan Sevinç") { return false }
                setIsAuth(true)
                console.log(auth.currentUser.displayName);
                navigate("/")
                localStorage.setItem("isAuth", true)
            })
    }

    return (
        <div className="login-container">
            <div className='login-form'>
                <div className="login-container">

                    {
                        isAuth ? (
                            <p className='welcome'>
                                {`Welcome to trendotoyol Admin`}
                            </p>
                        ) : (
                            <>
                                <p>Sign In With Google to Continue</p>
                                <button onClick={login} >
                                    <i className="fa-brands fa-google"></i>
                                    <span>Sign in with Google</span>
                                </button>
                            </>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Login