export default function BrandCard(props){
    return(
    <div className="brand_card">
        <img className='brand_logo' src={props.logo} alt='brands' />
        <p>{props.name}</p>
    </div>
    )
}