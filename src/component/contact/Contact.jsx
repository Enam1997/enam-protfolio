import React, { useRef } from "react";
import "./contact.css";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  // Send Email Function from EmailJs
  const sendEmail = (e) => {
    e.preventDefault();
    {
      console.log(form.current);
    }

    emailjs
      .sendForm(
        "service_x2lup7j",
        "template_vxr681q",
        form.current,
        "-4Jx9CHrnT4y2drER"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact_info">
          <h3 className="contact__title">Lets TAlk about everything</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        {/* <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form> */}

        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="from_name"
                className="contact__form-input"
                placeholder="Enter your name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="from_email"
                className="contact__form-input"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Enter your subject"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="write your message"
            ></textarea>
          </div>

          <input type="submit" value="Send Message" className="btn" />

          {/* <button className="btn">Send Message</button> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
