import { Helmet } from "react-helmet";
import Hero from "./Hero";
import Categories from "./Categories";
import AttarSection from "./AttarSection";
import PanjabiSection from "./PanjabiSection";
import ShirtSection from "./ShirtSection";
import Trouser from "./Trouser";
import Food from "./Food";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | My Shop</title>
        <meta name="description" content="Welcome to My Shop. Explore our collections of attar, panjabi, shirts, trousers, and food items." />
        <meta name="keywords" content="attar, panjabi, shirt, trouser, food, shop, ecommerce" />
      </Helmet>
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
