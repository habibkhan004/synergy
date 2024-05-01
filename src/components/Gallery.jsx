import { galleryHome } from "./js/gallery";
import "./css/gallery.css";
let Gallery = () => {
  return (
    <>
      <section className="gsection" id="gallery">
        <h1 style={{ textAlign: "center", fontSize: "4rem" }}>Our Gallery</h1>
        <div className="gallery" id="gallery">
          {galleryHome.map((img) => (
            <img src={img}></img>
          ))}
        </div>
      </section>
    </>
  );
};
export default Gallery;
