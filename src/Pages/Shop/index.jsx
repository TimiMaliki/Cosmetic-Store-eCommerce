import shop from './shopPage.module.scss'
import CategoriesProp from '../../components/CategoriesProp'
import ButtonProp from '../../components/ButtonProp'
import yellow from '../../assets/img/ShopImg/yellow.jpg'
import black from '../../assets/img/ShopImg/black.jpg'
import light from '../../assets/img/ShopImg/light.jpg'
import still from '../../assets/img/ShopImg/still.jpg'
import LogoComponent from '../../components/LogoComponent'

const Shop = () => {
  return (
    <div>
      {/* 
Shop title */}

      <div className={shop.title}>
        <h1>SHOP  STORE</h1>
      </div>


      {/* the search sort section */}
      <div className={shop.popular}>
        <div className={shop.popularCategory}>
          <CategoriesProp
            title="Showing 1-12 of 16 results"
          />
          <ButtonProp />
        </div>
      </div>

    
    {/* the products section phase one*/}


<div className={shop.popular}>
     
        <div className={shop.wrapper}>

          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={yellow} alt="" />
              <div className={shop.detail}>
                <p>Timi</p>
                <p>product Designer</p>
              </div>
            </div>
          </div>


          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={black} alt="" />
              <div className={shop.detail}>
                <p>$150:00</p>
                <p>Oil serum</p>
              </div>
            </div>
          </div>


          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={light} alt="" />
              <div className={shop.detail}>
                <p>$150:00</p>
                <p>Oil serum</p>
              </div>
            </div>
          </div>


          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={still} alt="" />
              <div className={shop.detail}>
                <p>$150:00</p>
                <p>Oil serum</p>
              </div>
            </div>
          </div>

        </div>
      </div>

   {/* the products section phase two*/}
   <div className={shop.popular}>
  
        <div className={shop.wrapper}>

          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={yellow} alt="" />
              <div className={shop.detail}>
                <p>Timi</p>
                <p>product Designer</p>
              </div>
            </div>
          </div>


          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={black} alt="" />
              <div className={shop.detail}>
                <p>$150:00</p>
                <p>Oil serum</p>
              </div>
            </div>
          </div>


          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={light} alt="" />
              <div className={shop.detail}>
                <p>$150:00</p>
                <p>Oil serum</p>
              </div>
            </div>
          </div>


          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={still} alt="" />
              <div className={shop.detail}>
                <p>$150:00</p>
                <p>Oil serum</p>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* the products section phase three*/}
   <div className={shop.popular}>
   
        <div className={shop.wrapper}>

          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={yellow} alt="" />
              <div className={shop.detail}>
                <p>Timi</p>
                <p>product Designer</p>
              </div>
            </div>
          </div>


          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={black} alt="" />
              <div className={shop.detail}>
                <p>$150:00</p>
                <p>Oil serum</p>
              </div>
            </div>
          </div>


          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={light} alt="" />
              <div className={shop.detail}>
                <p>$150:00</p>
                <p>Oil serum</p>
              </div>
            </div>
          </div>


          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={still} alt="" />
              <div className={shop.detail}>
                <p>$150:00</p>
                <p>Oil serum</p>
              </div>
            </div>
          </div>

        </div>
      </div>


{/* the products section phase four*/}
<div className={shop.popular}>
  
      <div className={shop.wrapper}>

          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={yellow} alt="" />
              <div className={shop.detail}>
                <p>Timi</p>
                <p>product Designer</p>
              </div>
            </div>
          </div>


          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={black} alt="" />
              <div className={shop.detail}>
                <p>$150:00</p>
                <p>Oil serum</p>
              </div>
            </div>
          </div>


          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={light} alt="" />
              <div className={shop.detail}>
                <p>$150:00</p>
                <p>Oil serum</p>
              </div>
            </div>
          </div>


          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={still} alt="" />
              <div className={shop.detail}>
                <p>$150:00</p>
                <p>Oil serum</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* the products section phase five*/}
<div className={shop.popular}>
  
  <div className={shop.wrapper}>

      <div className={shop.content}>
        <div className={shop.imgWrapper}>
          <img src={yellow} alt="" />
          <div className={shop.detail}>
            <p>Timi</p>
            <p>product Designer</p>
          </div>
        </div>
      </div>


      <div className={shop.content}>
        <div className={shop.imgWrapper}>
          <img src={black} alt="" />
          <div className={shop.detail}>
            <p>$150:00</p>
            <p>Oil serum</p>
          </div>
        </div>
      </div>


      <div className={shop.content}>
        <div className={shop.imgWrapper}>
          <img src={light} alt="" />
          <div className={shop.detail}>
            <p>$150:00</p>
            <p>Oil serum</p>
          </div>
        </div>
      </div>


      <div className={shop.content}>
        <div className={shop.imgWrapper}>
          <img src={still} alt="" />
          <div className={shop.detail}>
            <p>$150:00</p>
            <p>Oil serum</p>
          </div>
        </div>
      </div>

    </div>
  </div>


{/* the products section phase six*/}
<div className={shop.popular}>
  
      <div className={shop.wrapper}>

          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={yellow} alt="" />
              <div className={shop.detail}>
                <p>Timi</p>
                <p>product Designer</p>
              </div>
            </div>
          </div>


          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={black} alt="" />
              <div className={shop.detail}>
                <p>$150:00</p>
                <p>Oil serum</p>
              </div>
            </div>
          </div>


          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={light} alt="" />
              <div className={shop.detail}>
                <p>$150:00</p>
                <p>Oil serum</p>
              </div>
            </div>
          </div>


          <div className={shop.content}>
            <div className={shop.imgWrapper}>
              <img src={still} alt="" />
              <div className={shop.detail}>
                <p>$150:00</p>
                <p>Oil serum</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <LogoComponent />
    </div>
  )
}

export default Shop