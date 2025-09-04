import { Helmet } from "react-helmet";
import { products } from "../../Components/data.js";
import ProductCard from "../../Components/ProductCard.jsx";
import { Link } from "react-router-dom";

export default function ProductList() {
  const showProducts = products.slice(82, 110);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Helmet>
        <title>Panjabi Collection | Fashionnest</title>
        <meta
          name="description"
          content="Discover our exclusive Panjabi collection at Fashionnest. Shop the latest designs with premium quality fabrics."
        />
        <meta name="keywords" content="panjabi, fashionnest, traditional wear, men's fashion" />
      </Helmet>

      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-semibold uppercase text-black mr-4">
          panjabi
        </h1>
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
