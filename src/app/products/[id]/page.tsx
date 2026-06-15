import { Product } from "@/types/product";
import AddToCartButton from "@/components/AddToCartButton";

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">  {/* responsive padding */}
      <div className="grid md:grid-cols-2 gap-8 sm:gap-10">

        {/* Image */}
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-[280px] sm:h-[400px] object-cover rounded-xl"  
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {product.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm sm:text-base">
            {product.description}
          </p>
          <p className="text-2xl sm:text-3xl font-bold mt-5 sm:mt-6 text-gray-900 dark:text-white">
            LKR {product.price}
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Category: {product.category}
          </p>
          <AddToCartButton product={product} />
        </div>

      </div>
    </main>
  );
}