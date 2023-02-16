import { useEffect, useRef, useState } from "react"

export default function Slider({slides}){
    const [curIndex, setCurIndex] = useState(0) //индекс текущего слайда

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[curIndex].url})`
    } //стили слайдов; добавлены здесь для упрощения расположения картинок
    const goToPrevious = () => { //функция для переключения на предыдущий слайд
        const isFirstSlide = curIndex === 0 //проверка первый это слайд или нет
        const newIndex = isFirstSlide? slides.length -1 : curIndex -1 //формирование нового текущего индекса слайда
        setCurIndex(newIndex)
    }
    const goToNext = () => { //функция для переключения на следующий слайд
        const isLastSlide = curIndex === slides.length - 1 //проверка последний это слайд или нет
        const newIndex = isLastSlide? 0 : curIndex + 1  //формирование нового текущего индекса слайда
        setCurIndex(newIndex)
    }
    const goToSlide = slideIndex => { //функция для переключения между слайдами
        setCurIndex(slideIndex)
    }
    const timerRef = useRef(null)
    useEffect(() => {
        if(timerRef.current){
            clearTimeout(timerRef)
        }
        timerRef.current = setTimeout(() => {
            goToNext()
        }, 3000) //добавление таймера, чтобы слайдер автоматически переключался
        return () => clearTimeout(timerRef.current)
    })
    return(
        <div className="slider">
            <div className="slider_left_arrow" onClick={goToPrevious}>
                <svg width="60px" height="60px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M15 6l-6 6 6 6" stroke="#F3F3FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
            <div className="slider_right_arrow" onClick={goToNext}>
                <svg width="60px" height="60px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#EFB786"><path d="M9 6l6 6-6 6" stroke="#F3F3FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
            <div style={slideStyles}></div>
            <div className='slider_dots_container'>
                {slides.map((slide, slideIndex) => (
                    <div className='slider_dot' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                ))
                }
            </div>
        </div>
    )
}