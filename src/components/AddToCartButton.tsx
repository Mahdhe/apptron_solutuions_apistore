"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-8 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 active:scale-95 transition"
    >
      Add to Cart
    </button>
  );
}