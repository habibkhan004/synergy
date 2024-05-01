import cont from "./images/contact1.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
let Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("hk22221111", "template_s7x0qse", form.current, {
        publicKey: "Jp_tHEDf4etS4P43F",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("message send successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section style={{ marginTop: "80px" }} class="contact" id="contact">
        <h2 class="heading">
          <i class="fas fa-phone"></i> Contact <span>Us</span>
        </h2>

        <div class="container">
          <div class="content">
            <div class="image-box">
              <img draggable="false" src={cont} alt="" />
            </div>
            <form ref={form} onSubmit={sendEmail} id="contact-form">
              <div class="form-group">
                <div class="field">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                  />
                  <i class="fas fa-user"></i>
                </div>
                <div class="field">
                  <input
                    type="text"
                    name="from_email"
                    placeholder="Email"
                    required
                  />
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="field">
                  <input type="text" name="phone" placeholder="Phone" />
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div class="message">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                  <i class="fas fa-comment-dots"></i>
                </div>
              </div>
              <div class="button-area">
                <button type="submit">
                  Submit <i class="fa fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
