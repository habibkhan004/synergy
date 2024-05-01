import reactImg from "./images/reactprojects.png";
import reactImg2 from "./images/lapy.jpg";
let HomeProjects = () => {
  return (
    <>
      <section class="work" id="work">
        <h2 class="heading h11">
          <i class="fas fa-laptop-code"></i> Projects <span>Made</span>
        </h2>
        <div className="boxes">
          <div class="box-container" style={{}}>
            <div class="box tilt">
              <img draggable="false" src={reactImg2} alt="" />
              <div class="content">
                <div class="tag">
                  <h3>Ecomerce Store</h3>
                </div>
                <div class="desc">
                  <p>
                    Personal portfolio website. Don't need much info about it,
                    just scroll down. You're here only!
                  </p>
                  <div class="btns">
                    <a href="#" class="btn" target="_blank">
                      <i class="fas fa-eye"></i> View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="box-container" style={{}}>
            <div class="box tilt">
              <img draggable="false" src={reactImg2} alt="" />
              <div class="content">
                <div class="tag">
                  <h3>Online Result</h3>
                </div>
                <div class="desc">
                  <p>
                    Personal portfolio website. Don't need much info about it,
                    just scroll down. You're here only!
                  </p>
                  <div class="btns">
                    <a href="#" class="btn" target="_blank">
                      <i class="fas fa-eye"></i> View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="box-container" style={{}}>
            <div class="box tilt">
              <img draggable="false" src={reactImg2} alt="" />
              <div class="content">
                <div class="tag">
                  <h3>Looh o Qalam</h3>
                </div>
                <div class="desc">
                  <p>
                    Personal portfolio website. Don't need much info about it,
                    just scroll down. You're here only!
                  </p>
                  <div class="btns">
                    <a href="#" class="btn" target="_blank">
                      <i class="fas fa-eye"></i> View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="box-container" style={{}}>
            <div class="box tilt">
              <img draggable="false" src={reactImg2} alt="" />
              <div class="content">
                <div class="tag">
                  <h3>Portfolio Website</h3>
                </div>
                <div class="desc">
                  <p>
                    Personal portfolio website. Don't need much info about it,
                    just scroll down. You're here only!
                  </p>
                  <div class="btns">
                    <a href="#" class="btn" target="_blank">
                      <i class="fas fa-eye"></i> View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProjects;
