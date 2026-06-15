"use client";

import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { t } = useLanguage();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">{t.cartEmpty}</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap sm:flex-nowrap items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-gray-900 dark:text-white truncate">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.category}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-full border dark:border-gray-600 font-bold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    −
                  </button>
                  <span className="w-6 text-center font-semibold text-gray-900 dark:text-white">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, +1)}
                    className="w-8 h-8 rounded-full border dark:border-gray-600 font-bold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    +
                  </button>
                </div>

                <div className="font-bold text-gray-900 dark:text-white w-24 text-right">
                  LKR {(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white hover:bg-red-600 active:scale-95 px-3 sm:px-4 py-2 rounded-xl text-sm font-medium transition-all"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-5 sm:p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center text-gray-900 dark:text-white">
              <h2 className="text-lg sm:text-xl font-bold">{t.total}</h2>
              <span className="text-xl sm:text-2xl font-bold">
                LKR {total.toFixed(2)}
              </span>
            </div>
            <button className="mt-5 sm:mt-6 w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 active:scale-95 transition">
              {t.checkout}
            </button>
          </div>
        </>
      )}
    </main>
  );
}