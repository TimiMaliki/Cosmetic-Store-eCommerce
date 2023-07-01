import carousel from '../assets/styles/carousel.module.scss'
import beautifulAfrican from '../assets/img/HeaderImg/beautiful-african-female-feeling-grateful.jpg'

const CarouselComponent = () => {
    return (
        <div className={carousel.carousel}>
            <div className={carousel.carouselBox}>
                <p>Carousel</p>
            </div>

            <div className={carousel.carouselImg}>
<img src={beautifulAfrican} alt="" />
            </div>
        </div>
    )
}

export default CarouselComponent