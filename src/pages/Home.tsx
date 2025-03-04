import About from "../components/About";
import Competition from "../components/Competition";
import Skill from "../components/Skill";

const Home = () => {
  return (
    <>
      <div id="home">
        <About />
        <Skill />
        <Competition />
      </div>
    </>
  );
};
export default Home;
