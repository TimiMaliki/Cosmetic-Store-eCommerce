import index from './Home.module.scss'
import LogoComponent from '../../components/LogoComponent'
import ShopComponent from '../../components/ShopComponent'
import PopularProductComponent from '../../components/PopularProductComponent'
import AboutComponent from '../../components/AboutComponent'
import LatestItemsComponent from '../../components/LatestItemsComponent'
import CarouselComponent from '../../components/CarouselComponent'
import InstagramComponent from '../../components/InstagramComponent'
import FooterComponent from '../../components/FooterComponent'




function Home() {
  return (

    <div>


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

export default Home











