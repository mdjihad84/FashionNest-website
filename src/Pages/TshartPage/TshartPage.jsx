// src/components/ProductList.jsx
import { products } from "../../Components/data.js";
import ProductCard from "../../Components/ProductCard.jsx";
import { Link } from "react-router-dom";

export default function ProductList() {
  const showProducts = products.slice(16, 24);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
       <div className="flex items-center mb-6">
        <h1 className="text-2xl font-semibold uppercase text-black mr-4">t-shirt</h1>
        <div className="flex-1 border-t border-gray-300"></div>
        <Link
          to="/"
          className="ml-4 px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800 transition"
        >
          Back To Home
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
        {showProducts.map((item) => (
          <div key={item.id} className="w-full">
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
