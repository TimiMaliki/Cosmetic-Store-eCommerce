import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent'

const MainLayout = () => {
  return (
    <div>

<Navbar />
<Header />
        <Outlet />

        <FooterComponent />
    </div>
  )
}

export default MainLayout