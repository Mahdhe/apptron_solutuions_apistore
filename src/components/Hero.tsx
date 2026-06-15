import { FiSearch } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-14">

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
        {t.heroTitle.includes("Premium") ? (
          <>
            Discover Premium <br />
            <span className="text-blue-600">Products Online</span>
          </>
        ) : (
          t.heroTitle
        )}
      </h1>

      <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl text-sm sm:text-base">
        {t.heroSubtitle}
      </p>

      <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-sm max-w-xl focus-within:shadow-md transition">
        <FiSearch className="text-gray-500 dark:text-gray-400 flex-shrink-0" />
        <input
          type="text"
          placeholder={t.searchPlaceholder}
          className="w-full outline-none bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-black dark:bg-white text-white dark:text-black px-4 sm:px-6 py-2 rounded-xl text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 active:scale-95 transition flex-shrink-0">
          Search
        </button>
      </div>
    </section>
  );
}