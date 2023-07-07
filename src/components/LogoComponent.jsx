import logo from '../assets/styles/logo.module.scss'
import logoImgOne from '../assets/img/LogoImg/839942_preview.jpg'
import logoImgTwo from '../assets/img/LogoImg/18764028_rm370-08.jpg'
import a from '../assets/img/LogoImg/a.jpg'
import r from '../assets/img/LogoImg/r.jpg'
import g from '../assets/img/LogoImg/g.jpg'



const LogoComponent = () => {
  return (
    <div className={logo.logo}>
     <img src={a} alt="" />
     <img src={logoImgTwo} alt="" />
     <img src={logoImgOne} alt="" />
     <img src={r} alt="" />
     <img src={g} alt="" />
    </div>
  )
}

export default LogoComponent