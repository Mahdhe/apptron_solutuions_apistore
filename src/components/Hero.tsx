import { FiSearch } from "react-icons/fi";

export default function Hero({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-14">

      {/* Heading */}
      <h1 className="text-5xl font-bold leading-tight">
        Discover Premium <br />
        <span className="text-blue-600">
          Products Online
        </span>
      </h1>

      <p className="text-gray-500 mt-4 max-w-xl">
        Browse thousands of high-quality products with
        modern shopping experience.
      </p>

      {/* Search */}
      <div className="mt-8 flex items-center gap-3 bg-white border rounded-2xl px-5 py-4 shadow-sm max-w-xl focus-within:shadow-md transition">

        <FiSearch className="text-gray-500" />

        <input
          type="text"
          placeholder="Search products..."
          className="w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="bg-black text-white px-6 py-2 rounded-xl text-sm hover:bg-gray-800 active:scale-95 transition">
          Search
        </button>

      </div>
    </section>
  );
}