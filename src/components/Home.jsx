import HomeServices from "./HomeServices";
import HomeProjects from "./HomeProjects";
import Slider from "./Slider";
import Mission from "./Mission";
import Team from "./Team.jsx";
let Home = () => {
  return (
    <>
      <Slider></Slider>
      <HomeServices></HomeServices>
      <HomeProjects></HomeProjects>
      <Mission></Mission>
      <Team></Team>
    </>
  );
};

export default Home;
