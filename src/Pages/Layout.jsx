import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent'

const Layout = () => {
  return (
    <div>

<Header />
        <Outlet />

        <FooterComponent />
    </div>
  )
}

export default Layout