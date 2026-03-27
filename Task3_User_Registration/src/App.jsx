import { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";

function App() {

  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">

      <h1 className="text-4xl text-white font-bold text-center mb-8">
        User Registration
      </h1>

      <Form addUser={addUser} />

      <UserList users={users} />

    </div>
    
  );
}

export default App;