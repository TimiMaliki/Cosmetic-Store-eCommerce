import instagram from '../assets/styles/instagram.module.scss'
import CategoriesProp from './CategoriesProp'
import beautifulAfrican from '../assets/img/HeaderImg/beautiful-african-female-feeling-grateful.jpg'


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
            <img src={beautifulAfrican} alt="" />
            <img src={beautifulAfrican} alt="" />
            <img src={beautifulAfrican} alt="" />
            <img src={beautifulAfrican} alt="" />
            <img src={beautifulAfrican} alt="" />
                 </div>
            </div>

        </div>
    )
}

export default InstagramComponent