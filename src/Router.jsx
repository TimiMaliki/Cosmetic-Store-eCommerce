import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Login from './Pages/Login/Login'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import MainLayout from './Layout/MainLayout'

const Router = () => {
  return (
    <Routes>
  <Route>
    <Route path='' element={<MainLayout />} > 
    <Route index path=''  element={<Home />} />
    <Route  path="/about" element={<About />} />
    <Route  path="shop" element={<Shop />} />
    <Route  path="/blog" element={<Blog />} />
    <Route  path="/contact" element={<Contact />} />
   <Route path="/login" element={<Login />} />
   <Route path="*" element={<ErrorPage />} />
    </Route>
  
  </Route>
 </Routes>
  )
}

export default Router
