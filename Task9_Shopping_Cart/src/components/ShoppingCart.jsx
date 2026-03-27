import { useState } from "react";

function ShoppingCart() {

  const products = [
    {id: 1, name: "Mouse", price: 300 },
    {id: 2, name: "Keyboard", price: 1200 },
    {id: 3, name: "Monitor", price: 15000 }
  ];

  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Change quantity
  const changeQuantity = (id, amount) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + amount }
        : item
    ).filter(item => item.quantity > 0));
  };

  // Total price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-xl mx-auto p-5">

      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {/* Products */}
      <h3 className="font-semibold mb-2">Products</h3>
      <div className="space-y-2">
        {products.map(p => (
          <div key={p.id} className="flex justify-between bg-gray-100 p-2 rounded">
            <span>{p.name} - Rs {p.price}</span>
            <button
              onClick={() => addToCart(p)}
              className="bg-blue-500 text-white px-2 rounded"
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <h3 className="font-semibold mt-6 mb-2">Cart</h3>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="space-y-2">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-gray-200 p-2 rounded">

              <span>
                {item.name} (Rs {item.price})
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => changeQuantity(item.id, -1)}
                  className="bg-red-500 text-white px-2"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => changeQuantity(item.id, 1)}
                  className="bg-green-500 text-white px-2"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="bg-black text-white px-2"
              >
                Remove
              </button>

            </div>
          ))}
        </div>
      )}

      {/* Total */}
      <h3 className="mt-4 font-bold">
        Total: Rs {total}
      </h3>

    </div>
  );
}

export default ShoppingCart;