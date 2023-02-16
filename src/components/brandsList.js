import BrandCard from "./brandCard";
import React from 'react'
import {Link} from 'react-router-dom'

export default class BrandList extends React.Component{
    constructor(){
        super()
        this.state ={
            brands: [] //все бренды из базы данных
        }
    }
    componentDidMount()
    {
        fetch('http://127.0.0.1:8888/sneaker-shop/src/sql/getBrands.py') //запрос на сервер для получения всех брендов из базы данных
        .then((response) => response.text()) //получение ответа на запрос
        .then((brands_json) => {
            let brands = JSON.parse(brands_json) //преобразование ответа в массив
            this.setState({
                brands: [...brands]})
        }) 
    }
    render(){
        return(
            <div className='brands_container'>
                {this.state.brands.map((brand) =><Link to={`/catalog/${brand.brand}`} key={brand.id + 'n'}><BrandCard key={brand.id} name={brand.brand_name} logo={brand.brand_logo} /></Link>
                )}
            </div>
        )
    }
}