import instagram from '../assets/styles/instagram.module.scss'
import CategoriesProp from './CategoriesProp'


const InstagramComponent = () => {
    return (
        <div className={instagram.instagram}>
            <div className={instagram.instagramCategory}>
                <CategoriesProp
                    title="Follow Us On Instagram"
                />
              <p className={instagram.social}>@TimiMaliki</p>
            </div>

        </div>
    )
}

export default InstagramComponent