export default function SneakerCard(props){
    return(
        <div className="sneaker_card">
            <img className='sneaker_img' src={props.img} alt='sneakers' />
            <p>{props.brand}</p>
            <p>{props.model}</p>
            <div className="card_bottom">
                <div className="card_price">
                    <span>Price: <b>{props.price} RUB</b></span>
                </div>
            </div>
        </div>
    )
}