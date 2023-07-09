import form from './form.module.scss'

import React from 'react'

const index = () => {
    return (
        <div>
            {/* form  */}

            <div className={form.form}>
                <div className={form.text}>
                    <h3>Get in Touch</h3>
                </div>

                <div className={form.input}>
                    <input type="text" placeholder='Your Email' />
                    <input type="text" placeholder='name' />
                </div>
                <div className={form.textarea}>
                <textarea name="Write to Us" id="" cols="50" rows="20" placeholder='Write to Us'></textarea>
                </div>
              
              <div className={form.button}>
              <button className={form.button}>
                <p>Send</p>
            </button>
              </div>
               
            </div>

           
        </div>
    )
}

export default index