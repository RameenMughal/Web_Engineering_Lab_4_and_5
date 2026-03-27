const Home = () => {
  return (
    <div className="p-10 flex justify-center items-center min-h-[70vh] bg-gradient-to-r from-purple-100 to-indigo-100">
      <div className="max-w-3xl text-center rounded-lg shadow-lg p-10 bg-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Welcome to Tech-Mart
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Upgrade your tech. Enjoy seamless shopping and fast delivery.
        </p>
        <a
          href="/products"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition-all duration-200 inline-block"
        >
          Browse Products
        </a>
      </div>
    </div>
  );
};

export default Home;