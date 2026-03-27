// function BlogDetail({ post, goBack }) {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">

//       <button 
//         onClick={goBack}
//         className="mb-6 bg-white text-black px-4 py-2 rounded"
//       >
//         ⬅ Back
//       </button>

//       <div className="bg-white text-black p-6 rounded-xl shadow-lg max-w-2xl mx-auto">

//         <h1 className="text-3xl font-bold mb-4">
//           {post.title}
//         </h1>

//         <p>{post.content}</p>

//       </div>

//     </div>
//   );
// }

// export default BlogDetail;
function BlogDetail({ post, goBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">

      <button 
        onClick={goBack}
        className="mb-6 bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
      >
        ⬅ Back
      </button>

      <div className="bg-white text-black p-8 rounded-xl shadow-xl max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-3">
          {post.title}
        </h1>

        <p className="text-gray-500 mb-6">
          By {post.author} • {post.date}
        </p>

        <p className="text-lg leading-relaxed whitespace-pre-line">
          {post.content}
        </p>

      </div>

    </div>
  );
}

export default BlogDetail;