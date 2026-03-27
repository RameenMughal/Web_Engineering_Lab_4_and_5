import productsData from "../data/products";

const Products = ({ addToCart, removeFromCart, cart }) => {
  const getQuantity = (id) => {
    const item = cart.find((p) => p.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="rounded-lg p-4 shadow-lg bg-gradient-to-tr from-pink-100 via-yellow-100 to-green-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <img src={product.image} alt={product.name} className="w-full mb-2 rounded" />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-700 mb-2">PKR {product.price}</p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                -
              </button>
              <span className="font-bold">{getQuantity(product.id)}</span>
              <button
                onClick={() => addToCart(product)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;