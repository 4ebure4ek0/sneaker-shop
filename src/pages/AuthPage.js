import LogInForm from "../components/logInForm"
import SignInForm from '../components/signInForm'
import { observer } from 'mobx-react-lite'
import { Navigate } from "react-router-dom";
import React from "react";

const AuthPage = observer((props) => {
    return(
        <div className="auth">
            {props.logStore.isLoggedIn? <Navigate to='/profile'/>: null}
            {props.logStore.isRegistered? <LogInForm onChange={props.logStore.handleChange} onSubmit={props.logStore.handleSubmitLogIn} error={props.logStore.error} onClick={props.logStore.getUsers}/>: <SignInForm onChange={props.logStore.handleChange} onSubmit={props.logStore.handleSubmitSignIn} error={props.logStore.error} onClick={props.logStore.getUsers} />}
            <input type='button' className='btn' onClick={props.logStore.changeIsRegistered} value={props.logStore.isRegistered? "I'm not registered":"I'm registered"} />
        </div>
    )
})

export default AuthPage