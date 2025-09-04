// src/components/ProductList.jsx
import { products } from "../Components/data.js";
import { Link } from "react-router-dom"; // React Router ব্যবহার করা হয়েছে

export default function ProductList() {
  const showProducts = products.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header with line */}
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-semibold uppercase text-black mr-4">attar</h1>
        <div className="flex-1 border-t border-gray-300"></div>
        <Link
          to="/AttarSection"
          className="ml-4 px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800 transition"
        >
          View All
        </Link>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {showProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
