import CategoriesProp from '../../components/CategoriesProp'
import ButtonProp from '../../components/ButtonProp'
import LogoComponent from '../../components/LogoComponent'
import CarouselComponent from '../../components/CarouselComponent'
import about from './aboutpage.module.scss'
import beautifulWoman from '../../assets/img/HeaderImg/portrait-beautiful-black-woman-with-mysterious-shadows (1).jpg'
import scentPurple from '../../assets/img/ShopImg/fresh-scent-purple-flower-glass-bottle-generative-ai.jpg'
import free from '../../assets/img/ShopImg/free-photo-beauty-product-bottle-mockup-image-with-background.jpg'
import bottle from '../../assets/img/ShopImg/word.jpg'
import a from '../../assets/img/HeaderImg/a.jpg'
import b from '../../assets/img/HeaderImg/b.jpg'
import c from '../../assets/img/HeaderImg/c.jpg'
import d from '../../assets/img/HeaderImg/d.jpg'
import groom from '../../assets/img/ShopImg/groom.jpg'
import product from '../../assets/img/ShopImg/product.jpg'
import land from '../../assets/img/ShopImg/land.jpg'


const index = () => {
  return (
    <div>

      {/* 
For the about us writeup */}

      <div className={about.title}>
        <h1>ABOUT US</h1>
      </div>

      <div className={about.about}>

        <div className={about.aboutText}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
            delectus accusantium facere, iste neque ab doloremque
            voluptate expedita qui cum in, animi eligendi?</p>
        </div>

        <div className={about.image}>
          <img src={beautifulWoman} alt="" />
        </div>

      </div>


      {/* 
product section  */}

      <div className={about.shop}>
        <div className={about.shopContent}>

          <div className={about.shopContentOne}>

            <div className={about.shopContentImg}>

              <img src={scentPurple} alt="" />

            </div>

          </div>
          <div className={about.shopContentTwo}>
            <img src={bottle} alt="" width={190} height={90} />
            <img src={free} alt="" width={190} height={90} />
          </div>
        </div>
      </div>


      {/* 
TEAM SECTION  */}

      <div className={about.popular}>
        <div className={about.popularCategory}>
          <CategoriesProp
            title="Our Team"
            text="add our new arrivals to your weekly ineup"
          />
          <ButtonProp />
        </div>

        <div className={about.wrapper}>

          <div className={about.content}>
            <div className={about.imgWrapper}>
              <img src={a} alt="" />
              <div className={about.detail}>
                <p>Chioma <br/>
                  Product designer
                </p>
              </div>
            </div>
          </div>


          <div className={about.content}>
            <div className={about.imgWrapper}>
              <img src={b} alt="" />
              <div className={about.detail}>
              <p>Timi<br/>
                  CEO
                </p>
              </div>
            </div>
          </div>


          <div className={about.content}>
            <div className={about.imgWrapper}>
              <img src={c} alt="" />
              <div className={about.detail}>
              <p>Lucy<br/>
                  Fashion designer
                </p>
              </div>
            </div>
          </div>


          <div className={about.content}>
            <div className={about.imgWrapper}>
              <img src={d} alt="" />
              <div className={about.detail}>
              <p>laddi<br/>
                  Product manager
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* 
Service Section  */}
      <div className={about.latest}>
        <div className={about.wrapper}>

          <div className={about.content}>
            <div className={about.imgWrapper}>
              <img src={groom} alt="" />
              <div className={about.detail}>
                <p>Price : $120:00</p>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>


          <div className={about.content}>
            <div className={about.imgWrapper}>
              <img src={product} alt="" />
              <div className={about.detail}>
                <p>Price : $120:00</p>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>


          <div className={about.content}>
            <div className={about.imgWrapper}>
              <img src={land} alt="" />
              <div className={about.detail}>
                <p>Price : $120:00</p>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <CarouselComponent />
      <LogoComponent />
    </div>

  )
}

export default index