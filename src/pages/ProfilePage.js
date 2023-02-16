import { observer } from 'mobx-react-lite'
import { Navigate } from "react-router-dom";

const ProfilePage = observer((props) => {
    return(
        <div className='profile page_container'>
            {props.logStore.isLoggedIn? null: <Navigate to='/auth'/>}
            <img className='profile_page_img' src='./person.jpg' alt='person' />
            <p><b>Username: </b>{props.logStore.username}<br />
            <b>Firstname: </b>{props.logStore.firstname}</p>
            <button onClick={props.logStore.handleLogOut} ><svg width="60px" height="60px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#696363"><path d="M12 12h7m0 0l-3 3m3-3l-3-3M19 6V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2v-1" stroke="#696363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
        </div>
    )
})

export default ProfilePage