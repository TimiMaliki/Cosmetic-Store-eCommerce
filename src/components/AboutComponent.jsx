import about from '../assets/styles/about.module.scss'
import beautifulWoman from '../assets/img/HeaderImg/portrait-beautiful-black-woman-with-mysterious-shadows.jpg'


const AboutComponent = () => {
  return (
    <div className={about.about}>
           <div className={about.image}>
          
          <img src={beautifulWoman} alt="" />

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