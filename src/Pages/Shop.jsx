import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent'

const Shop = () => {
  return (
    <div>

<Header />
        <Outlet />

        <FooterComponent />
    </div>
  )
}

export default Shop