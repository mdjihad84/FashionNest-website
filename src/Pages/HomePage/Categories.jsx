import Honey from "../../Images/Honey.jpg";
import Atar from "../../Images/Atar.jpg";
import Pant from "../../Images/Pant.jpg";
import Shart from "../../Images/Shart.jpg";
import Tshart from "../../Images/Tshart.jpg";
import Tshart1 from "../../Images/Tshart1.jpg";
import Tupi from "../../Images/Tupi.jpg";
import Show from "../../Images/Show.jpg";

const Menu = () => {
  const images = [Atar, Honey, Shart, Pant, Tshart, Show, Tshart1, Tupi];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={imgSrc}
              alt={`Menu item ${index + 1}`}
              className="w-full h-[100px] object-cover rounded-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
