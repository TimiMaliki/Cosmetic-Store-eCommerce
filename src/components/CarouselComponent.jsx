import carousel from '../assets/styles/carousel.module.scss'
import beautifulAfrican from '../assets/img/HeaderImg/cute-black-woman-posing-outdoor-showing-signs-smiling.jpg'
import word from '../assets/img/ShopImg/word.jpg'

const CarouselComponent = () => {
    return (
        <div className={carousel.carousel}>
            <div className={carousel.carouselBox}>
            <img src={word} alt="" width={190} height={120}/>
            </div>

            <div className={carousel.carouselImg}>
<img src={beautifulAfrican} alt="" />
            </div>
        </div>
    )
}

export default CarouselComponent