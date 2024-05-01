import one from "./images/lapy.jpg";
import "./css/about.css";
let About = () => {
  return (
    <>
      <section className="about2">
        <div className="welcome">
          <div className="para">
            <p>
              Welcome to Software Synergy Solutions, where expertise meets
              innovation to fuel your digital success journey. With years of
              experience and a team of seasoned developers, we are committed to
              delivering top-notch solutions tailored to meet your unique
              digital needs. <br /> <br /> At Software Synergy Solutions, we
              understand the importance of quality, timeliness, and
              affordability. Our mission is simple: to create exceptional
              websites, software, and digital solutions that exceed expectations
              while staying within your budget and timeline. <br /> <br />
              Whether you're a startup, small business, or large enterprise,
              we're here to help you thrive in the digital landscape. We believe
              in transparency and collaboration, which is why we offer free
              consultations to discuss your project requirements. <br /> <br />{" "}
              Feel free to reach out to us, because at Software Synergy
              Solutions, your success is our priority, and the first step is
              always on us.
            </p>
          </div>
          <div className="img">
            <img src={one} alt="" />
          </div>
        </div>
      </section>
      <section class="about" id="about">
        <h2 class="heading">
          About <span>Us</span>
        </h2>

        <div class="row">
          <div class="image">
            <img draggable="false" class="tilt" src={one} alt="" />
          </div>

          <div class="content">
            <h3>Software Synergy Club</h3>
            <span class="tag">Software House</span>

            <p>
              our mission doesn't end with just delivering exceptional
              solutions. We're also passionate about giving back to the
              community that has given us so much. That's where the Software
              Synergy Club comes in. It's our way of paying it forward, of
              nurturing the next generation of talent, and of making a positive
              impact on society. In the Software Synergy Club, students aren't
              just learners; they're family. With dedicated mentors, hands-on
              learning experiences, and a supportive environment, we're
              empowering students to thrive in the ever-evolving world of
              technology. From mastering Python to diving into the world of
              machine learning, we're equipping students with the skills they
              need to succeed in the digital age. So come, join us on this
              journey of learning, growth, and innovation. Together, we'll not
              only build great things; we'll also build a brighter future for
              all. Welcome to Software Synergy Solutions, where technology meets
              humanity, and dreams become reality.{" "}
            </p>

            <div class="box-container">
              <div class="box">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> phone :{" "}
                  </span>
                  +92 3409805771
                </p>

                <br />
                <p>
                  <span>
                    {" "}
                    <i className="fa fa-envelope"></i> email :{" "}
                  </span>{" "}
                  synergyclub009@gmail.com
                </p>
                <br />
                <p>
                  <span>
                    {" "}
                    <i className="fa fa-map-marker-alt"></i> Location :{" "}
                  </span>{" "}
                  University Town, opposite Jawad Tower Peshawar, KPK, Pakistan
                </p>
              </div>
            </div>

            {/* <div className="about-content">
          <h1 style={{ textAlign: "center" }}>ABOUT SOFTWARE SYNERGY CLUB</h1> */}
            {/* <div className="about1">
            <div className="img1">
              <img src={one} alt="" />
            </div>
            <div className="para">
              <p>
                {" "}
                our mission doesn't end with just delivering exceptional
                solutions. We're also passionate about giving back to the
                community that has given us so much. That's where the Software
                Synergy Club comes in. It's our way of paying it forward, of
                nurturing the next generation of talent, and of making a
                positive impact on society. In the Software Synergy Club,
                students aren't just learners; they're family. With dedicated
                mentors, hands-on learning experiences, and a supportive
                environment, we're empowering students to thrive in the
                ever-evolving world of technology. From mastering Python to
                diving into the world of machine learning, we're equipping
                students with the skills they need to succeed in the digital
                age. So come, join us on this journey of learning, growth, and
                innovation. Together, we'll not only build great things; we'll
                also build a brighter future for all. Welcome to Software
                Synergy Solutions, where technology meets humanity, and dreams
                become reality.
              </p>
            </div>
          </div>
        </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
