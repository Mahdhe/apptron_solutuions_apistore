import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-50 to-white text-gray-900">

        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>

      </body>
    </html>
  );
}