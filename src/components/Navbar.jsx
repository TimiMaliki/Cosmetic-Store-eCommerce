import navbar from '../assets/styles/navbar.module.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={navbar.navBar}>

    <div className={navbar.navBarWrapper}>

      <div className={navbar.brandName}>
        <h1>Maliki</h1>
      </div>

      <div className={navbar.icons}>
        <div className={navbar.iconWrapper}>
          <button><Link to="Login"><p>Log In</p></Link></button>
        </div>
      </div>

    </div>

    <div className={navbar.nav}>
      <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/Shop">Shop</Link> </li>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="Contact">Contact</Link></li>
      </ul>
    </div>



</div>
  )
}

export default Navbar