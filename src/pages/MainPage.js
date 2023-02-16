import BrandList from '../components/brandsList'
import Slider from '../components/slider'

export default function MainPage(){
    const slides = [
        {url: './img_adv/adv1.jpg', title: 'adv1'},
        {url: './img_adv/adv2.jpg', title: 'adv2'},
        {url: './img_adv/adv3.jpg', title: 'adv3'},
        {url: './img_adv/adv4.jpg', title: 'adv4'}
    ] //слайды для слайдера на главной странице
    return(
        <div className='container'>
            <div className="slider_container">
                <Slider slides={slides} />
            </div>
            <div>
                <h1>Brands</h1>
                <BrandList />
            </div>
        </div>
    )    
}