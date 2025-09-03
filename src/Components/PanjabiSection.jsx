// src/components/ProductList.jsx
import { products } from "../Components/data.js";
import ProductCard from "./ProductCard.jsx";
import { js } from '@eslint/js';

export default function ProductList() {
  const showProducts = products.slice(8, 16);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">panjabi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {showProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

