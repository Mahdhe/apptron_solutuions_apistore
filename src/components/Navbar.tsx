"use client";

import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-900">
          Store<span className="text-blue-600">.</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <span className="hover:text-black transition cursor-pointer">Shop</span>
          <span className="hover:text-black transition cursor-pointer">Categories</span>
          <span className="hover:text-black transition cursor-pointer">Deals</span>
          <span className="hover:text-black transition cursor-pointer">About Us</span>
          <span className="hover:text-black transition cursor-pointer">Contact</span>
        </nav>

        {/* Cart Icon */}
        <div className="relative cursor-pointer">
          <Link href="/cart" className="relative cursor-pointer">
            <FiShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-md">
              {totalItems}
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}