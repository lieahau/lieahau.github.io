import About from "../components/About";
import Career from "../components/Career";
import Competition from "../components/Competition";
import Skill from "../components/Skill";

const Home = () => {
  return (
    <>
      <div id="home">
        <About />
        <Skill style={{ backgroundColor: "lightsteelblue" }} />
        <Career />
        <Competition style={{ backgroundColor: "lightsteelblue" }} />
      </div>
    </>
  );
};
export default Home;
