"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-2xl border hover:shadow-md transition"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-black">{item.title}</h2>
                  <p className="text-gray-500 text-sm">{item.category}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-full border font-bold text-black hover:bg-gray-100 transition"
                  >
                    −
                  </button>
                  <span className="w-6 text-center font-semibold text-black">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, +1)}
                    className="w-8 h-8 rounded-full border font-bold text-black hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>

                {/* Item Total */}
                <div className="font-bold text-black w-20 text-right">
                  LKR {(item.price * item.quantity).toFixed(2)}
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white hover:bg-red-600 active:scale-95 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                >
                  Remove
                </button>

              </div>
            ))}
          </div>

          {/* Total + Checkout */}
          <div className="mt-10 bg-white border p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center text-black">
              <h2 className="text-xl font-bold">Total</h2>
              <span className="text-2xl font-bold">LKR {total.toFixed(2)}</span>
            </div>
            <button className="mt-6 w-full bg-black text-white py-3 rounded-full text-lg font-semibold hover:bg-gray-800 active:scale-95 transition">
              Checkout
            </button>
          </div>
        </>
      )}

    </main>
  );
}