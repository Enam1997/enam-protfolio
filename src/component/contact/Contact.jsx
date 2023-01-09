import React from 'react';
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact_info">
          <h3 className="contact__title">Lets TAlk about everything</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Enter your name'/>
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Enter your email'/>
            </div>
            
          </div>

          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Enter your subject'/>
          </div>

          <div className="contact__form-div contact__form-area">
             <textarea name="" id="" cols="30" rows="10"
             className="contact__form-input"
             placeholder='write your message'></textarea>
          </div>

          <button className="btn">Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact