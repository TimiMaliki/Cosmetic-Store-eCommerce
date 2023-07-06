import headerStyles from '../assets/styles/header.module.scss'
// import beautifulBlack from '../assets/img/HeaderImg/portrait-beautiful-black-woman-with-mysterious-shadows (1).jpg'


const Header = () => {
  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.headerText}>
     <p>
     Lorem ipsum dolor sit,
       amet consectetur adipisicing elit. 
       Expedita a aut quod sit consequatur!
     </p>
    </div>  
    <div className={headerStyles.headerImg}>
      {/* <img src={beautifulBlack} alt="" /> */}

      </div>  
    </div>
  )
}

export default Header