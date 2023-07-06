import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FooterComponent from '../components/FooterComponent'

const MainLayout = () => {
  return (
    <div>

<Navbar />
        <Outlet />

        <FooterComponent />
        
    </div>
  )
}

export default MainLayout