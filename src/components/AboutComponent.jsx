import about from '../assets/styles/about.module.scss'
import beautifulAfrican from '../assets/img/HeaderImg/beautiful-african-female-feeling-grateful.jpg'


const AboutComponent = () => {
  return (
    <div className={about.about}>
           <div className={about.image}>
          
          <img src={beautifulAfrican} alt="" />

        </div>

        <div className={about.aboutText}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
             delectus accusantium facere, iste neque ab doloremque 
            voluptate expedita qui cum in, animi eligendi?</p>
        </div>

    </div>
  )
}

export default AboutComponent