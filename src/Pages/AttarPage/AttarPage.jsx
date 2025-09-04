// src/components/ProductList.jsx
import { products } from "../../Components/data.js";
import ProductCard from "../../Components/ProductCard.jsx";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ProductList() {
  const showProducts = products.slice(40, 82);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div>
        <Helmet>
          <title>Attar | Fashionnest</title>
          <meta
            name="description"
            content="Welcome to Fashionnest. Explore our collections of attar, panjabi, shirts, trousers, and food items."
          />
          <meta name="keywords" content="attar, panjabi, shirt, trouser, food, shop" />
        </Helmet>
      </div>
      
      {/* Header with line */}
      <div className="flex items-center mb-6">
        <h1 className="text-[20px] lg:text-2xl font-semibold uppercase text-black mr-4">attar</h1>
        <div className="flex-1 border-t border-gray-300"></div>
        <Link
          to="/"
          className="ml-4 px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800 transition"
        >
          Back to Home
        </Link>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
        {showProducts.map((item) => (
          <div key={item.id} className="w-full">
            <ProductCard
              product={item}
              className="w-full h-auto sm:h-64 md:h-72 lg:h-80" // height adjust
            />
          </div>
        ))}
      </div>
    </div>
  );
}
