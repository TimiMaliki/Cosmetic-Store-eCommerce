import contact from './contact.module.scss'
import FormPage from '../form/index'
import beautifulWoman from '../../assets/img/HeaderImg/portrait-beautiful-black-woman-with-mysterious-shadows (1).jpg'

const Contact = () => {
  return (
    <div>

      {/* 
For the about us writeup */}

      <div className={contact.title}>
        <h1>CONTACT US</h1>
      </div>

      <div className={contact.wrapper}>
        {/* first box */}
        <div className={contact.box}>
          <div className={contact.boxIcon}>
            <img src={beautifulWoman} alt="" />
          </div>

          <div className={contact.locationText}>
            <h2>Location</h2>

            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        {/* second box */}
        <div className={contact.box}>
          <div className={contact.boxIcon}>
            <img src={beautifulWoman} alt="" />
          </div>

          <div className={contact.locationText}>
            <h2>Location</h2>

            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        {/* third box */}
        <div className={contact.box}>
          <div className={contact.boxIcon}>
            <img src={beautifulWoman} alt="" />
          </div>

          <div className={contact.locationText}>
            <h2>Location</h2>

            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      {/* the embedded map */}
      <div className={contact.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507793.3663414369!2d7.568921917008884!3d6.112429911683447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105b5ff01eca7139%3A0x1558aa72bcf6d884!2sEbonyi%20Voice%20Junction!5e0!3m2!1sen!2sng!4v1688743388773!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">

        </iframe>
      </div>


    <FormPage />
  
    </div>
  )
}

export default Contact