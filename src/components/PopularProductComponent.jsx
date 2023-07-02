import PopularProduct from '../assets/styles/popularProduct.module.scss'
import CategoriesProp from './CategoriesProp'
import ButtonProp from './ButtonProp'
import yellow from '../assets/img/ShopImg/yellow.jpg'
import black from '../assets/img/ShopImg/black.jpg'
import light from '../assets/img/ShopImg/light.jpg'
import still from '../assets/img/ShopImg/still.jpg'

const PopularProductComponent = () => {
    return (
        <div className={PopularProduct.popular}>
            <div className={PopularProduct.popularCategory}>
                <CategoriesProp
                    title="Popular Product"
                    text="add our new arrivals to your weekly ineup"
                />
                <ButtonProp />
            </div>

            <div className={PopularProduct.wrapper}>

                <div className={PopularProduct.content}>
                    <div className={PopularProduct.imgWrapper}>
                        <img src={yellow} alt="" />
                        <div className={PopularProduct.detail}>
                            <p>$150:00</p>
                            <p>Oil serum</p>
                        </div>
                    </div>
                </div>


                <div className={PopularProduct.content}>
                    <div className={PopularProduct.imgWrapper}>
                        <img src={black} alt="" />
                        <div className={PopularProduct.detail}>
                            <p>$150:00</p>
                            <p>Oil serum</p>
                        </div>
                    </div>
                </div>


                <div className={PopularProduct.content}>
                    <div className={PopularProduct.imgWrapper}>
                        <img src={light} alt="" />
                        <div className={PopularProduct.detail}>
                            <p>$150:00</p>
                            <p>Oil serum</p>
                        </div>
                    </div>
                </div>


                <div className={PopularProduct.content}>
                    <div className={PopularProduct.imgWrapper}>
                        <img src={still} alt="" />
                        <div className={PopularProduct.detail}>
                            <p>$150:00</p>
                            <p>Oil serum</p>
                        </div>
                    </div>
                </div>


            </div>






        </div>

    )
}

export default PopularProductComponent