// import {FaHeart} from  'react-icons/fa'
// import {FaSearch} from  'react-icons/fa'
// import {FaShoppingCart} from  'react-icons/fa'
import { Route, Routes } from 'react-router-dom'
import index from './assets/styles/index.module.scss'
import Header from './components/Header'
import LogoComponent from './components/LogoComponent'
import ShopComponent from './components/ShopComponent'
import PopularProductComponent from './components/PopularProductComponent'
import AboutComponent from './components/AboutComponent'
import LatestItemsComponent from './components/LatestItemsComponent'
import CarouselComponent from './components/CarouselComponent'
import InstagramComponent from './components/InstagramComponent'
import FooterComponent from './components/FooterComponent'
import LoginPage from './components/LoginPage'

 
function App() {
  return (

    <div className={index.navBar}>

      <div className={index.navBarWrapper}>

        <div className={index.brandName}>
          <h1>Maliki</h1>
        </div>

        <div className={index.icons}>
          <div className={index.iconWrapper}>
            <button>
              <p>Log In</p>
            </button>
          </div>
        </div>

      </div>


      <div className={index.nav}>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div> 



      <Header />
      <LogoComponent /> 
       <ShopComponent />
      <PopularProductComponent />
      <AboutComponent />
      <LatestItemsComponent/>
      <CarouselComponent />
      <InstagramComponent />
      <FooterComponent/> 
     </div>
  )
}

export default App










      // <LoginPage /> 
     