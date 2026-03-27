import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Tech-Mart</h1>
      <div className="space-x-6 flex items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/cart" className="hover:underline">
          Cart ({cartCount || 0})
        </Link>
        <Link to="/checkout" className="hover:underline">Checkout</Link>
      </div>
    </nav>
  );
};

export default Navbar;