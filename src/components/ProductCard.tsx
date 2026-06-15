"use client";

import { Product } from "@/types/product";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

      <Link href={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>

      <div className="p-4">
        <h2 className="font-semibold line-clamp-1 text-gray-900 dark:text-white">
          {product.title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {product.category}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-gray-900 dark:text-white">
            LKR {product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-black dark:bg-white text-white dark:text-black text-sm px-4 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 active:scale-95 transition"
          >
            {t.addToCart.split(" ")[0]} {/* "Add" */}
          </button>
        </div>
      </div>
    </div>
  );
}