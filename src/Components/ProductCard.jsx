// src/components/ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <div className="relative w-[285px] bg-white border rounded-lg shadow hover:shadow-lg overflow-hidden">
      {/* Discount Badge */}
      <span className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
        {product.discount}
      </span>

      {/* Product Image */}
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-60 object-cover"
      />

      {/* Product Info */}
      <div className="text-center">
        <h2 className="text-lg font-medium text-black ">{product.title}</h2>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="line-through text-sm text-black font-medium">
            {product.oldPrice} ৳
          </span>
          <span className="text-black font-bold text-lg">
            {product.price} ৳
          </span>
        </div>
        <button className="mt-2 w-[300px] bg-black text-white px-4 py-2 rounded hover:bg-blue-700">
          Buy Now
        </button>
      </div>
    </div>
  );
}
