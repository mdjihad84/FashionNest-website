import Hero from "./Hero";
// import Navigation from "../Components/Navigation";
import Categories from "./Categories";
import AttarSection from "./AttarSection";
import PanjabiSection from "./PanjabiSection";
import ShirtSection from "./ShirtSection";
import Trouser from "./Trouser";
import Food from "./Food";

const Home = () => {
  return (
    <div>
      <>
        {/* <Navigation /> */}
        <Hero />
        <Categories />
        <AttarSection />
        <PanjabiSection />
        <ShirtSection />
        <Trouser />
        <Food />
      </>
    </div>
  );
};
export default Home;
