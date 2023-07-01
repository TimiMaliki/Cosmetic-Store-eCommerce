import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import footer from '../assets/styles/footer.module.scss'
import CategoriesProp from './CategoriesProp'

const FooterComponent = () => {
    return (
        <div className={footer.footer}>
            <div className={footer.subWrapper}>
                <CategoriesProp
                    title="Subscribe to recieve 10% off your next purchase.
                  Plus hear about our new arrivals and offers."
                />
                <button className={footer.button}>
                    <p>Contact Us</p>
                </button>
            </div>
            <div className={footer.footerBody}>
                <div className={footer.bodyWrapper}>
                    <div className={footer.brandName}>
                        <h3>Maliki</h3>
                        <br />
                        <p>Lorem, ipsum.</p>
                        <br />
                        <div className={footer.socialLinks}>
                            <FaTwitter></FaTwitter>
                            <FaFacebook></FaFacebook>
                            <FaWhatsapp></FaWhatsapp>
                            <FaInstagram></FaInstagram>
                        </div>

                    </div>

                    <div className={footer.info}>
                        <h3>Information</h3>
                        <ul>
                            <li><a href="">About Maliki</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Contact us</a></li>
                        </ul>
                    </div>

                    <div className={footer.quickLinks}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="">Wishlist</a></li>
                            <li><a href="">checksouts</a></li>
                            <li><a href="">Cart</a></li>
                        </ul>
                    </div>

                    <div className={footer.contactUs}>
                        <h3>Contact Us</h3>
                        <ul>
                            <li><a href="">No 4 Odi Nwankwo street</a></li>
                            <li><a href="">+2348102850113</a></li>
                            <li><a href="">maliki@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className={footer.copyRight}>
                    <p>Copyright &copy; 2023 Maliki all right reserved</p>
                </div>
            </div>

         
        </div>
    )
}

export default FooterComponent