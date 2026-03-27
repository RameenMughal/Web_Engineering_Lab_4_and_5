const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="border p-3 flex justify-between items-center mt-2 rounded shadow-sm">
      <div>
        <h2 className="font-semibold">{item.name}</h2>
        <p className="text-gray-700">PKR {item.price}</p>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;