// import {FaHeart} from  'react-icons/fa'
// import {FaSearch} from  'react-icons/fa'
// import {FaShoppingCart} from  'react-icons/fa'
import { Link, Route, Routes } from 'react-router-dom'
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
import About from './Pages/About'
// import Blog from './Pages/Blog'
// import Shop from './Pages/Shop'
// import Contact from './Pages/Contact'
// import Layout from './Pages/Layout'


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
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/Shop">Shop</Link> </li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="Contact">Contact</Link></li>
        </ul>
      </div>

 <Routes>

  <Route>
    <Route index element={<Header />} />
    <Route  path="/About" element={<About />} />

  </Route>
 </Routes>

 {/* <Route  index element={<Header />} />
    <Route  path="new" element={<Shop />} />
    <Route  path="new" element={<Blog />} />
    <Route  path="new" element={<About />} />
    <Route  path="new" element={<Contact />} /> */}

      
      <LogoComponent />
      <ShopComponent />
      <PopularProductComponent />
      <AboutComponent />
      <LatestItemsComponent />
      <CarouselComponent />
      <InstagramComponent />
      <FooterComponent />
    </div>
  )
}

export default App










      // <LoginPage /> 
