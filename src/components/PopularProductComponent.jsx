import PopularProduct from '../assets/styles/popularProduct.module.scss'
import CategoriesProp from './CategoriesProp'
import ButtonProp from './ButtonProp'
import beautifulAfrican from '../assets/img/HeaderImg/beautiful-african-female-feeling-grateful.jpg'

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
                        <img src={beautifulAfrican} alt="" />
                        <div className={PopularProduct.detail}>
                            <p>$150:00</p>
                            <p>Oil serum</p>
                        </div>
                    </div>
                </div>


                <div className={PopularProduct.content}>
                    <div className={PopularProduct.imgWrapper}>
                        <img src={beautifulAfrican} alt="" />
                        <div className={PopularProduct.detail}>
                            <p>$150:00</p>
                            <p>Oil serum</p>
                        </div>
                    </div>
                </div>


                <div className={PopularProduct.content}>
                    <div className={PopularProduct.imgWrapper}>
                        <img src={beautifulAfrican} alt="" />
                        <div className={PopularProduct.detail}>
                            <p>$150:00</p>
                            <p>Oil serum</p>
                        </div>
                    </div>
                </div>


                <div className={PopularProduct.content}>
                    <div className={PopularProduct.imgWrapper}>
                        <img src={beautifulAfrican} alt="" />
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