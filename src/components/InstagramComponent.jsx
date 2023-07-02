import instagram from '../assets/styles/instagram.module.scss'
import CategoriesProp from './CategoriesProp'
import cream from '../assets/img/ShopImg/cream.jpg'
import dark from '../assets/img/ShopImg/dark.jpg'
import brand from '../assets/img/ShopImg/brand.jpg'
import headshot from '../assets/img/ShopImg/headshot.jpg'
import black from '../assets/img/ShopImg/black.jpg'



const InstagramComponent = () => {
    return (
        <div className={instagram.instagram}>
            <div className={instagram.instagramCategory}>
                <CategoriesProp
                    title="Follow Us On Instagram"
                />
              <p className={instagram.social}>@TimiMaliki</p>
            </div>

            <div className={instagram.instaflex}>
            <div className={instagram.imgflex}>
            <img src={cream} alt="" />
            <img src={dark} alt="" />
            <img src={headshot} alt="" />
            <img src={black} alt="" />
            <img src={brand} alt="" />
                 </div>
            </div>

        </div>
    )
}

export default InstagramComponent