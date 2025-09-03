import Hero from "../Components/Hero";
// import Navigation from "../Components/Navigation";
import Categories from "../Components/Categories";
import AttarSection from "../Components/AttarSection";
import PanjabiSection from "../Components/PanjabiSection";
import ShirtSection from "../Components/ShirtSection";
import Trouser from "../Components/Trouser";
import Food from "../Components/Food";
import FooterSection from "../Components/FooterSection";

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
        <FooterSection />
      </>
    </div>
  );
};
export default Home;
