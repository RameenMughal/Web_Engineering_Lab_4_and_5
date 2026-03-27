import { posts } from "../data/posts";
import BlogCard from "./BlogCard";

function BlogList({ setSelectedPost }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-orange-500 p-6">

      <h1 className="text-4xl text-white font-bold text-center mb-10">
        Blog Mini App
      </h1>

      <div className="grid grid-cols-3 gap-6">

        {posts.map(post => (
          <BlogCard key={post.id} post={post} setSelectedPost={setSelectedPost} />
        ))}

      </div>

    </div>
  );
}

export default BlogList;