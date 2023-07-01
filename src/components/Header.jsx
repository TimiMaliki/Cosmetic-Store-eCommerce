import headerStyles from '../assets/styles/header.module.scss'
import beautifulAfrican from '../assets/img/HeaderImg/beautiful-african-female-feeling-grateful.jpg'


const Header = () => {
  return (
    <div
    className={headerStyles.header}>
      <div className={headerStyles.headerText}>
      Lorem ipsum dolor sit,
       amet consectetur adipisicing elit. 
       Expedita a aut quod sit consequatur!
    </div>  
    <div className={headerStyles.headerImg}>
      <img src={beautifulAfrican} alt="" />

      </div>  
    </div>
  )
}

export default Header