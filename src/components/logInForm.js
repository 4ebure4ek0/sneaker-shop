import Error from './error'

export default function LogInForm(props){
    return(
        <form>
        <Error error = {props.error} /><br />
            <p>Enter your username:<br />
                <input type='text' name='username' onChange={props.onChange} onClick={props.onClick}/>
            </p>
            <p>Enter your password:<br />
                <input type='text' name='password' onChange={props.onChange} />
            </p><br />
            <input type='button' className='btn' value='Log in' onClick={props.onSubmit} />
        </form>
    )
}