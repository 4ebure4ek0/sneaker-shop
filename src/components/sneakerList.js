import SneakerCard from "./sneakerCard";
import React from 'react';
import {Link} from 'react-router-dom'
import sneakerStore from "./store/sneakerStore";

class SneakerList extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            sneakers: [] //все кроссовки
        }
    }
    componentDidMount()
    {
        fetch('http://127.0.0.1:8888/sneaker-shop/src/sql/getSneakers.py') //запрос на сервер для получения всех кроссовок из базы данных
        .then((response) => response.text()) //получение ответа на запрос
        .then((sneakers_json) => {
            let sneakers = JSON.parse(sneakers_json) //преобразование ответа в массив
            this.setState({
                sneakers: [...sneakers]})
        })
    }
    render(){
        
        return(
        <>
            {this.state.sneakers.filter((sneaker) => sneaker.model.includes(this.props.search)).sort((s1, s2) => this.props.sort=='asc'? s1.price - s2.price: null).sort((s1, s2) => this.props.sort=='desc'? s2.price - s1.price: null).map((sneaker) => 
            <div key={sneaker.id + 'd'} className='sneaker_container'>
                <Link to={`/catalog/${sneaker.brand}/${sneaker.id}`} key={sneaker.id + 'n'}>
                    <SneakerCard key={sneaker.id} brand={sneaker.brand_name} model={sneaker.model} img={sneaker.img1} price={sneaker.price} />
                </Link>
                <button className="add_button" key={sneaker.id + 'b'} onClick={sneakerStore.handleId} name={sneaker.id}>{sneakerStore.sneakersId.includes(`${sneaker.id}`)? '✓' : '+'}</button>
            </div>)}
        </>
        )
    }
}

export default SneakerList