import { useState } from "react";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";

function App() {

  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div>
      {
        selectedPost 
          ? <BlogDetail post={selectedPost} goBack={() => setSelectedPost(null)} />
          : <BlogList setSelectedPost={setSelectedPost} />
      }
    </div>
  );
}

export default App;