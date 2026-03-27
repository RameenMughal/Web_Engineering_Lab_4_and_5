const ProductCard = ({ product, addToCart }) => {

  return (

    <div className="border p-4 rounded shadow hover:shadow-lg">

      <img
        src={product.image}
        alt={product.name}
        className="w-full"
      />

      <h2 className="text-lg font-bold mt-2">

        {product.name}

      </h2>

      <p className="text-gray-700">

        PKR {product.price}

      </p>

      <button

        onClick={() => addToCart(product)}

        className="bg-blue-500 text-white px-3 py-1 mt-2 w-full"
      >

        Add to Cart

      </button>

    </div>

  );

};

export default ProductCard;