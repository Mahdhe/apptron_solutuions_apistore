import { Product } from "@/types/product";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

      <Link href={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>

      <div className="p-4">

        <h2 className="font-semibold line-clamp-1 text-black">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <div className="flex justify-between items-center mt-4">

          <span className="font-bold text-black">
            LKR {product.price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 active:scale-95 transition"
          >
            Add
          </button>

        </div>

      </div>
    </div>
  );
}