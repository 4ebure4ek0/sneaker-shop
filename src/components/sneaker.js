import React from 'react';
import Slider from './slider';
import sneakerStore from './store/sneakerStore';

export default class Sneaker extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            id: props.id, //id нужной пары кроссовок
            sneakers: [] //все кроссовки
        }
    }
    componentDidMount(props)
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
        let sneaker = this.state.sneakers[this.state.id - 1] //нахождение нужной модели кроссовок по индексу
        if(sneaker != undefined){
            return(
            <div className='sneaker_page'>
                <div className='sneaker_img_container'>
                    <Slider slides={[{url: sneaker.img1}, {url: sneaker.img2}, {url: sneaker.img3}]} />
                </div>
                <div className='sneaker_text_container'>
                    <h1>{sneaker.brand_name}</h1><br />
                    <i>{sneaker.model}</i>
                    <h1>Price: </h1>
                    {sneaker.price} RUB<br />
                    <button name={sneaker.id} onClick={sneakerStore.handleId}>{sneakerStore.sneakersId.includes(`${sneaker.id}`)? '✓' : '+'}</button>
                </div>
            </div>
            )
        }
    }
}