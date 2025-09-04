
import { Outlet } from "react-router-dom";
import Header from "../Pages/HomePage/Header";
import FooterSection from "../Pages/HomePage/FooterSection";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <FooterSection/>
    </div>
  );
};

export default Main;