import { useState } from "react";

function ProductCatalog() {

  const products = [
    { name: "Mouse", price: 300 },
    { name: "Keyboard", price: 1200 },
    { name: "Monitor", price: 15000 },
    { name: "Laptop", price: 80000 }
  ];

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.price.toString().includes(search)
  );

  return (
    <div className="max-w-md mx-auto p-6">

      <h2 className="text-2xl font-bold mb-4 text-center">
        Product Catalog
      </h2>

      <input
        type="text"
        placeholder="Search by name or price"
        className="w-full border p-2 rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="space-y-2">
        {filteredProducts.map((product, index) => (
          <li
            key={index}
            className="p-3 bg-blue-100 rounded flex justify-between"
          >
            <span>{product.name}</span>
            <span className="font-semibold">Rs {product.price}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ProductCatalog;