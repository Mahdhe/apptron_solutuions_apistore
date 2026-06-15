"use client";

import { useState } from "react";
import { FiShoppingCart, FiSun, FiMoon, FiMenu, FiX, FiUser, FiLogOut } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Navbar() {
  const { cart } = useCart();
  const { theme, toggleTheme } = useTheme();
  const { user, logout, isAuthenticated } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { label: t.home, href: "/" },
    { label: t.shop, href: "#" },
    { label: t.categories, href: "#" },
    { label: t.deals, href: "#" },
    { label: t.aboutUs, href: "#" },
    { label: t.contact, href: "#" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-indigo-900 dark:text-indigo-300">
            Store<span className="text-blue-600">.</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-black dark:hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">

            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "si" | "fr")}
              className="hidden sm:block text-xs border border-gray-200 dark:border-gray-700 rounded-lg px-2 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 cursor-pointer"
            >
              <option value="en">EN</option>
              <option value="si">සිං</option>
              <option value="fr">FR</option>
            </select>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <FiMoon size={18} className="text-gray-700" />
              ) : (
                <FiSun size={18} className="text-yellow-400" />
              )}
            </button>

            {/* Auth Button */}
            {isAuthenticated ? (
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {t.welcome}, {user?.name}
                </span>
                <button
                  onClick={logout}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  aria-label="Logout"
                >
                  <FiLogOut size={18} className="text-gray-700 dark:text-gray-300" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="hidden sm:flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
              >
                <FiUser size={16} />
                {t.login}
              </button>
            )}

            {/* Cart */}
            <Link href="/cart" className="relative p-2">
              <FiShoppingCart size={22} className="text-gray-700 dark:text-gray-300" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-black dark:bg-white text-white dark:text-black text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 pb-4 pt-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language */}
            <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as "en" | "si" | "fr")}
                className="text-sm border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                <option value="en">English</option>
                <option value="si">සිංහල</option>
                <option value="fr">Français</option>
              </select>
            </div>

            {/* Mobile Auth */}
            <div className="pt-2">
              {isAuthenticated ? (
                <button
                  onClick={() => { logout(); setMobileOpen(false); }}
                  className="w-full text-left text-sm text-gray-600 dark:text-gray-300 py-2 hover:text-black dark:hover:text-white"
                >
                  {t.logout} ({user?.name})
                </button>
              ) : (
                <button
                  onClick={() => { setShowLoginModal(true); setMobileOpen(false); }}
                  className="w-full text-left text-sm text-gray-600 dark:text-gray-300 py-2 hover:text-black dark:hover:text-white"
                >
                  {t.login}
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </>
  );
}

// ─── Login Modal ────────────────────────────────────────────
function LoginModal({ onClose }: { onClose: () => void }) {
  const { login } = useAuth();
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    const success = await login(email, password);
    setLoading(false);
    if (success) {
      onClose();
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl p-8 w-full max-w-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          {t.login}
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <p className="text-xs text-gray-400">
            Demo: user@store.com / password123
          </p>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-6 w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 active:scale-95 transition disabled:opacity-50"
        >
          {loading ? "Signing in..." : t.login}
        </button>
      </div>
    </div>
  );
}