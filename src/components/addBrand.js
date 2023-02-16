import React from "react"
import { Navigate } from "react-router-dom";

export default class AddBrand extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            brand: '', //имя бренда прописными буквами без пробелов
            brand_name: '', //имя бренда которое видят пользователи
            brand_logo: '', //логотип бренда
            isAdd: this.props.isAdd //проверка добавления бренда
        }
        this.handleChange = this.handleChange.bind(this) //считывание всех данных
        this.addBrandToDB = this.addBrandToDB.bind(this) //отправка запроса с данными на сервер для добавления в базу данных
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }
    addBrandToDB(){
        let brand = {
            brand: this.state.brand,
            brand_name: this.state.brand_name,
            brand_logo: this.state.brand_logo,
        }
        let brand_json = JSON.stringify(brand) //преобразование данных в строку
        fetch('http://127.0.0.1:8888/sneaker-shop/src/sql/addBrand.py', {method:'post', body: brand_json}) //отправка запроса на сервер
        this.setState({isAdd: true})
    }
    render(){
        return(
            <>
            <form className="add_page_detail">
                <input type="text" placeholder='Brand' name='brand' onChange={this.handleChange}/><br />
                <input type="text" placeholder='Brand name' name='brand_name' onChange={this.handleChange}/><br />
                <input type="text" placeholder='Logo' name='brand_logo' onChange={this.handleChange}/><br />
                <input type='button' value='add' onClick={this.addBrandToDB}/>
            </form>
            {this.state.isAdd? <Navigate to='/'/>: null}
            </>
        )
    }
}