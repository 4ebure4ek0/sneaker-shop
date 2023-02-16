import React from "react";
import SneakerDrawerList from "../components/sneakerDrawerList";
import sneakerStore from '../components/store/sneakerStore'
import logStore from '../components/store/logStore'
import { Navigate } from "react-router-dom";

export default function DrawerPage (){
    return(
        <div className="drawer">
            {logStore.isLoggedIn? <SneakerDrawerList store={sneakerStore}/>: <Navigate to='/auth' />}
        </div>
    )
}