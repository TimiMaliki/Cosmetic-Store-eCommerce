import contact from './contact.module.scss'
import FormPage from '../form/index'
import phone from '../../assets/img/HeaderImg/phone.jpg'
import loc from '../../assets/img/HeaderImg/loc.jpg'
import Email from '../../assets/img/HeaderImg/gmail.png'

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
            <img src={loc} alt="" />
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
            <img src={phone} alt="" />
          </div>

          <div className={contact.locationText}>
            <h2>Phone</h2>

            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        {/* third box */}
        <div className={contact.box}>
          <div className={contact.boxIcon}>
            <img src={Email} alt="" />
          </div>

          <div className={contact.locationText}>
            <h2>Email</h2>

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