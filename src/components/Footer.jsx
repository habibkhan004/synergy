let Footer = () => {
  return (
    <>
      <section id="footer" class="footer" style={{ marginTop: "10px" }}>
        <div className="iii">
          <div class="box-container">
            <div class="box">
              <h3>Software Synergy Solutions</h3>
              <p>
                Welcome to Software Synergy Solutions, where expertise meets
                innovation to fuel your digital success journey. With years of
                experience and a team of seasoned developers, we are committed
                to delivering top-notch solutions tailored to meet your unique
                digital needs 🚀. Connect with me over live chat!
              </p>
            </div>

            <div class="box">
              <h3>Contact Us</h3>
              <p>
                {" "}
                <i class="fas fa-phone"></i>+92 340 9805771
              </p>
              <p>
                {" "}
                <i class="fas fa-envelope"></i>synergyclub009@gmail.com
              </p>
              <p>
                {" "}
                <i class="fas fa-map-marked-alt"></i>University Town Peshawar
                Pakistan
              </p>
              <div class="share">
                <a
                  href="https://www.linkedin.com/company/software-synergy-club/"
                  class="fab fa-linkedin"
                  aria-label="LinkedIn"
                  target="_blank"
                ></a>

                <a
                  href="mailto:synergyclub009@gmail.com"
                  class="fas fa-envelope"
                  aria-label="Mail"
                  target="_blank"
                ></a>
                <a
                  href="https://web.facebook.com/profile.php?id=61551473005155"
                  class="fab fa-facebook"
                  aria-label="GitHub"
                  target="_blank"
                ></a>
                <a
                  href="https://www.instagram.com/software_synergy_club/"
                  class="fab fa-instagram"
                  aria-label="Telegram"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>
        </div>
        <p className="para">
          &copy; 2024 Software Synergy Solutions. All rights reserved.
        </p>
      </section>
    </>
  );
};
export default Footer;
