const Checkout = ({ cart, placeOrder }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-purple-700">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 mb-4">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart summary with images */}
          <div className="mb-6 space-y-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-lg bg-gradient-to-r from-yellow-100 to-orange-100 flex items-center justify-between shadow"
              >
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                  <span>{item.name} x {item.quantity}</span>
                </div>
                <span>PKR {item.price * item.quantity}</span>
              </div>
            ))}
            <div className="text-right font-bold text-xl">Total: PKR {total}</div>
          </div>

          {/* Checkout form */}
          <form className="flex flex-col gap-3">
            <input type="text" placeholder="Full Name" className="border p-2 rounded" />
            <input type="email" placeholder="Email" className="border p-2 rounded" />
            <input type="text" placeholder="Address" className="border p-2 rounded" />
            <button
              type="button"
              onClick={placeOrder}
              className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
            >
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;