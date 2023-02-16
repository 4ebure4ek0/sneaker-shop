import React from 'react';
import Error from './error'

export default function SignInForm(props){
    return(
        <form>
            <Error error = {props.error} /><br />
            <p>Create a username:<br />
                <input type='text' name='username' onChange={props.onChange} onClick={props.onClick} />
            </p>
            <p>Create a password:<br />
                <input type='text' name='password' onChange={props.onChange} />
            </p>
            <p>Enter your firstname:<br />
                <input type='text' name='firstname' onChange={props.onChange} />
            </p><br />
            <input type='button' className='btn' value='Sign in' onClick={props.onSubmit}/>
        </form>
    )
}