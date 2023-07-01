import shop from '../assets/styles/shopCategory.module.scss'
import CategoriesProp from './CategoriesProp'
import ButtonProp from './ButtonProp'
import beautifulAfrican from '../assets/img/HeaderImg/beautiful-african-female-feeling-grateful.jpg'

const ShopComponent = () => {
    return (
        <div className={shop.shop}>
            <div className={shop.shopCategory}>
                <CategoriesProp 
                title="Shop by  Categories"
                text="add our new arrivals to your weekly ineup"
                />
                <ButtonProp/>
            </div>

            <div className={shop.shopContent}>

            <div className={shop.shopContentOne}>

            <div className={shop.shopContentImg}>

            <img src={beautifulAfrican} alt="" />

               </div>
    
               </div>
               <div className={shop.shopContentTwo}>
                <img src={beautifulAfrican} alt="" width={190} height={90}/>
                <img src={beautifulAfrican} alt="" width={190} height={90} />
            </div>
            </div>

          
        </div>
    )
}

export default ShopComponent