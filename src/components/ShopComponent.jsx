import shop from '../assets/styles/shopCategory.module.scss'
import CategoriesProp from './CategoriesProp'
import ButtonProp from './ButtonProp'
import scentPurple from '../assets/img/ShopImg/fresh-scent-purple-flower-glass-bottle-generative-ai.jpg'
import free from '../assets/img/ShopImg/free-photo-beauty-product-bottle-mockup-image-with-background.jpg'
import bottle from '../assets/img/ShopImg/word.jpg'



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

            <img src={scentPurple} alt="" />

               </div>
    
               </div>
               <div className={shop.shopContentTwo}>
                <img src={bottle} alt="" width={190} height={90}/>
                <img src={free} alt="" width={190} height={90} />
            </div>
            </div>

          
        </div>
    )
}

export default ShopComponent