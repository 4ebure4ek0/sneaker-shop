import React from "react"
import { Navigate } from "react-router-dom"

export default class AddSneaker extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            brand: '', //имя бренда прописными буквами без пробелов
            brand_name: '', //имя бренда которое видят пользователи
            model: '', //имя модели
            img1: '', //первое фото кроссовок
            img2: '', //второе фото кроссовок
            img3: '', //третье фото кроссовок
            price: '', //цена
            isAdd: this.props.isAdd //проверка добавления кроссовок
        }
        this.handleChange = this.handleChange.bind(this) //считывание всех данных
        this.addSneakerToDB = this.addSneakerToDB.bind(this) //отправка запроса с данными на сервер для добавления в базу данных
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }
    addSneakerToDB(){
        let sneaker = {
            brand: this.state.brand,
            brand_name: this.state.brand_name,
            model: this.state.model,
            img1: this.state.img1,
            img2: this.state.img2,
            img3: this.state.img3,
            price: this.state.price
        }
        let sneaker_json = JSON.stringify(sneaker) //преобразование данных в строку
        fetch('http://127.0.0.1:8888/sneaker-shop/src/sql/addSneaker.py', {method:'post', body: sneaker_json}) //отправка запроса на сервер
        this.setState({isAdd: true})
    }
    render(){
        return(
            <>
            <form className="add_page_detail add_sneaker_page_detail">
                <input type="text" placeholder='Brand' name='brand' onChange={this.handleChange} /><br />
                <input type="text" placeholder='Brand name' name='brand_name' onChange={this.handleChange}/><br />
                <input type="text" placeholder='Model' name='model' onChange={this.handleChange}/><br />
                <input type="text" placeholder='Image 1' name='img1' onChange={this.handleChange}/><br />
                <input type="text" placeholder='Image 2' name='img2' onChange={this.handleChange}/><br />
                <input type="text" placeholder='Image 3' name='img3' onChange={this.handleChange}/><br />
                <input type="text" placeholder='Price' name='price' onChange={this.handleChange}/><br />
                <button onClick={this.addSneakerToDB}>add</button>
            </form>
            {this.state.isAdd? <Navigate to='/catalog'/>: null}
            </>
        )
    }
}