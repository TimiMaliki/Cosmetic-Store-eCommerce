import logo from '../assets/styles/logo.module.scss'
import logoImgOne from '../assets/img/LogoImg/839942_preview.jpg'
import logoImgTwo from '../assets/img/LogoImg/18764028_rm370-08.jpg'
import logoImgThree from '../assets/img/LogoImg/28560857_christmas_2012_new_5891.jpg'



const LogoComponent = () => {
  return (
    <div className={logo.logo}>
     <img src={logoImgOne} alt="" />
     <img src={logoImgTwo} alt="" />
     <img src={logoImgOne} alt="" />
     <img src={logoImgOne} alt="" />
     <img src={logoImgThree} alt="" />
    </div>
  )
}

export default LogoComponent