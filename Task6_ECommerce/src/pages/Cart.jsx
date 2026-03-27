const Cart = ({ cart, addToCart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">No items in your cart.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-between shadow"
            >
              <div className="flex items-center space-x-4">
                {/* Small product image */}
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-700">PKR {item.price} x {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  -
                </button>
                <span className="font-bold">{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="text-right text-xl font-bold mt-4">
            Total: PKR {total}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;