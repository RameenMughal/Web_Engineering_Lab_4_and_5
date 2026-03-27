function BlogCard({ post, setSelectedPost }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg">

      <h3 className="font-bold mb-2">{post.title}</h3>

      <p className="text-gray-600 mb-4">
        {post.content.slice(0, 40)}...
      </p>

      <button
        onClick={() => setSelectedPost(post)}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Read More
      </button>

    </div>
  );
}

export default BlogCard;