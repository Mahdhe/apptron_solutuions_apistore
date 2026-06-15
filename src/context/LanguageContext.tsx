"use client";

import { createContext, useContext, useState } from "react";

type Language = "en" | "si" | "fr";

type Translations = {
  home: string;
  shop: string;
  categories: string;
  deals: string;
  aboutUs: string;
  contact: string;
  searchPlaceholder: string;
  heroTitle: string;
  heroSubtitle: string;
  addToCart: string;
  checkout: string;
  cartEmpty: string;
  total: string;
  login: string;
  logout: string;
  welcome: string;
};

const translations: Record<Language, Translations> = {
  en: {
    home: "Home",
    shop: "Shop",
    categories: "Categories",
    deals: "Deals",
    aboutUs: "About Us",
    contact: "Contact",
    searchPlaceholder: "Search products...",
    heroTitle: "Discover Premium Products Online",
    heroSubtitle: "Browse thousands of high-quality products with a modern shopping experience.",
    addToCart: "Add to Cart",
    checkout: "Checkout",
    cartEmpty: "Your cart is empty.",
    total: "Total",
    login: "Login",
    logout: "Logout",
    welcome: "Welcome",
  },
  si: {
    home: "මුල් පිටුව",
    shop: "වෙළඳසැල",
    categories: "කාණ්ඩ",
    deals: "දීමනා",
    aboutUs: "අප ගැන",
    contact: "සම්බන්ධ කරන්න",
    searchPlaceholder: "නිෂ්පාදන සොයන්න...",
    heroTitle: "ඔන්ලයින් වෙළඳසැලේ හොඳම නිෂ්පාදන සොයන්න",
    heroSubtitle: "නවීන සාප්පු සවාරි අත්දැකීමකින් ගුණාත්මක නිෂ්පාදන දහස් ගණනක් ගවේෂණය කරන්න.",
    addToCart: "කාට් එකට එකතු කරන්න",
    checkout: "ගෙවීම",
    cartEmpty: "ඔබේ කාර්ට් එක හිස් ය.",
    total: "එකතුව",
    login: "ඇතුළු වන්න",
    logout: "පිටව යන්න",
    welcome: "සාදරයෙන් පිළිගනිමු",
  },
  fr: {
    home: "Accueil",
    shop: "Boutique",
    categories: "Catégories",
    deals: "Offres",
    aboutUs: "À propos",
    contact: "Contact",
    searchPlaceholder: "Rechercher des produits...",
    heroTitle: "Découvrez des Produits Premium en Ligne",
    heroSubtitle: "Parcourez des milliers de produits de haute qualité avec une expérience moderne.",
    addToCart: "Ajouter au panier",
    checkout: "Commander",
    cartEmpty: "Votre panier est vide.",
    total: "Total",
    login: "Connexion",
    logout: "Déconnexion",
    welcome: "Bienvenue",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}