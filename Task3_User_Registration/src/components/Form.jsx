import { useState } from "react";

function Form({ addUser }) {

  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !role) return;

    addUser({
      id: Date.now(),
      name,
      role
    });

    setName('');
    setRole('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto"
    >

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
      />

      <input
        type="text"
        placeholder="Enter Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
      />

      <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Add User
      </button>

    </form>
  );
}

export default Form;