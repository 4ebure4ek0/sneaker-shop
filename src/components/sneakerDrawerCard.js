import React from "react";

export default class SneakerDrawerCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sneakers: [] //все кроссовки
        }
    }
    componentDidMount(){
        fetch('http://127.0.0.1:8888/sneaker-shop/src/sql/getSneakers.py') //запрос на сервер для получения всех кроссовок из базы данных
        .then((response) => response.text()) //получение ответа на запрос
        .then((sneakers_json) => {
            let sneakers = JSON.parse(sneakers_json) //преобразование ответа в массив
            this.setState({
                sneakers: sneakers})
        })
    }
    render(){
        let sneaker = this.state.sneakers[this.props.id - 1] //нахождение нужной модели кроссовок по индексу
        if(sneaker != undefined){
            return(
                <div className="sneaker_drawer_card">
                    <img src={sneaker.img1} />
                    <div>
                        <h2>{sneaker.brand_name}</h2>
                        <i>{sneaker.model}</i>
                    </div>
                    <h3>{sneaker.price} RUB</h3>
                    <button name={sneaker.id} onClick={this.props.onclick}>x</button>
                </div>
            )
        }
    }
}