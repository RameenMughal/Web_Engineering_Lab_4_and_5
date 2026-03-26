import React, { useState } from 'react';
import { Trash2, Plus, Circle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { 
      id: 1, 
      text: "Read ISO 27001 Framework", 
      description: "Focus on Annex A controls and risk assessment.", 
      completed: false,
      isExpanded: true 
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputValue, description: "", completed: false, isExpanded: false }]);
    setInputValue('');
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const updateTodo = (id, field, value) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, [field]: value } : todo
    ));
  };

  const toggleExpand = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isExpanded: !todo.isExpanded } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-200 to-blue-300 flex items-center justify-center p-4 font-sans antialiased">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8 min-h-[500px]">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-normal text-slate-800 tracking-tight">Todo List</h1>
          <button 
            onClick={() => setTodos([])} 
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 size={24} />
          </button>
        </div>

        {/* Add Input Area */}
        <form onSubmit={handleAddTodo} className="mb-10 flex items-center border-b border-gray-200 pb-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 outline-none text-xl text-gray-700 placeholder-gray-400"
          />
          <button type="submit" className="text-[#5c6df2] hover:scale-110 active:scale-95 transition-all ml-4">
            <Plus size={32} strokeWidth={2.5} />
          </button>
        </form>

        {/* List */}
        <div className="space-y-0">
          {todos.map((todo) => (
            <div 
              key={todo.id} 
              className="group border-b border-gray-200 py-6 last:border-0" 
            >
              <div className="flex items-center">
                <button onClick={() => toggleComplete(todo.id)} className="mr-4 focus:outline-none">
                  {todo.completed ? (
                    <CheckCircle2 size={24} className="text-green-600" />
                  ) : (
                    <Circle size={24} className="text-indigo-900" />
                  )}
                </button>
                
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => updateTodo(todo.id, 'text', e.target.value)}
                  className={`flex-1 bg-transparent outline-none text-xl transition-all ${
                    todo.completed ? 'text-gray-400 line-through' : 'text-slate-800 font-medium'
                  }`}
                />

                <div className="flex items-center gap-3">
                  <button onClick={() => toggleExpand(todo.id)} className="text-gray-400 hover:text-indigo-600 transition-colors">
                    {todo.isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                  </button>
                  <button 
                    onClick={() => deleteTodo(todo.id)}
                    className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all ml-2"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>

              {todo.isExpanded && (
                <div className="mt-4 ml-10">
                  <textarea
                    placeholder="Add a description..."
                    value={todo.description}
                    onChange={(e) => updateTodo(todo.id, 'description', e.target.value)}
                    className="w-full text-lg text-gray-600 bg-gray-50 rounded-2xl p-4 outline-none border border-gray-100 resize-none h-28"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}