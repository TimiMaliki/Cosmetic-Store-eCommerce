import {FaHeart} from  'react-icons/fa'
import {FaSearch} from  'react-icons/fa'
import {FaShoppingCart} from  'react-icons/fa'
import index from './assets/styles/index.module.scss'
import Header from './components/Header'
import LogoComponent from './components/LogoComponent'
import ShopComponent from './components/ShopComponent'
import PopularProductComponent from './components/PopularProductComponent'
import AboutComponent from './components/AboutComponent'
import LatestItemsComponent from './components/LatestItemsComponent'
import CarouselComponent from './components/CarouselComponent'
import InstagramComponent from './components/InstagramComponent'


function App() {
  return (

    <div className={index.navBar}>
      <div className={index.navBarWrapper}>

      <div className={index.brandName}>
         <h1>Maliki</h1>
      </div>

      <div className={index.icons}>
        <div className={index.iconWrapper}>
        <FaSearch className={index.FaSearch}></FaSearch>
        <FaHeart className={index.FaHeart}></FaHeart>
        <FaShoppingCart className={index.FaShoppingCart}></FaShoppingCart>
        </div>
      </div>

      </div>
      

      <div className={index.nav}>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
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
    </div>
  )
}

export default App
