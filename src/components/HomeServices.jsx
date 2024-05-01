import lapy from "./images/lapy.jpg";
import { services } from "./services";
let HomeServices = () => {
  return (
    <>
      {" "}
      <section class="skills" id="skills">
        <h2 class="heading">
          <i class="fas fa-laptop-code"></i> Our <span>Services</span>
        </h2>
        <p style={{ textAlign: "center", fontSize: "2rem" }}>
          This is our services Paragraph
        </p>
        <div class="container">
          <div class="row" id="skillsContainer">
            {services.map((Product) => (
              <div class="bar">
                <div class="info">
                  <img src={Product.img} />
                  <span>{Product.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeServices;
