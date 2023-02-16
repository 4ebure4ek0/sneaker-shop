import React from 'react'
import { Navigate } from 'react-router-dom'
import AddBrand from '../components/addBrand'
import AddSneaker from '../components/addSneaker'
import logStore from '../components/store/logStore'

export default class AddPage extends React.Component{
    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.state = {
            choosenAdd: 'brand'
        }
    }
    handleAdd(event){
        this.setState({choosenAdd: event.target.value}) //считывание что нужно добавить: бренд или кроссовки
    }
    render(){
        return(
            <>
            {logStore.isLoggedIn? null: <Navigate to='/auth' />}
            {logStore.isAdmin? null: <Navigate to='/catalog' />}
            <form className="add_page" >
                <h1> Choose what to add </h1><br />
                <select value={this.state.choosenAdd} onChange={this.handleAdd}>
                    <option value='brand'>Brand</option>
                    <option value='sneaker'>Sneaker</option>
                </select>
                
            </form>
            {this.state.choosenAdd == 'sneaker'? <AddSneaker isAdd={false}/>: <AddBrand isAdd={false}/>}
            </>
        )
    }
}