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
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="bg-white p-6 rounded-2xl border">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-gray-500 mt-4">{product.description}</p>
          <p className="text-3xl font-bold mt-6">LKR {product.price}</p>
          <p className="mt-2 text-sm text-gray-500">Category: {product.category}</p>
          <AddToCartButton product={product} /> 
        </div>

      </div>
    </main>
  );
}