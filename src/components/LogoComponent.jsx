import logo from '../assets/styles/logo.module.scss'
import logoImgOne from '../assets/img/LogoImg/839942_preview.jpg'

const LogoComponent = () => {
  return (
    <div className={logo.logo}>
     <img src={logoImgOne} alt="" />
     <img src={logoImgOne} alt="" />
     <img src={logoImgOne} alt="" />
     <img src={logoImgOne} alt="" />
     <img src={logoImgOne} alt="" />
    </div>
  )
}

export default LogoComponent