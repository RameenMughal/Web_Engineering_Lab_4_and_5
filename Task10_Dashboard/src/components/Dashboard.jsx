import { useState } from "react";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  // Profile state
  const [name, setName] = useState("Huda");
  const [email, setEmail] = useState("huda@example.com");

  // Settings state
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Dashboard
      </h2>

      {/* Tabs */}
      <div className="flex justify-around mb-6 border-b pb-3">

        <button
          onClick={() => setActiveTab("profile")}
          className={`px-4 py-2 rounded ${
            activeTab === "profile" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Profile
        </button>

        <button
          onClick={() => setActiveTab("settings")}
          className={`px-4 py-2 rounded ${
            activeTab === "settings" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Settings
        </button>

        <button
          onClick={() => setActiveTab("orders")}
          className={`px-4 py-2 rounded ${
            activeTab === "orders" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Orders
        </button>

      </div>

      {/* Content */}
      <div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Profile Info</h3>

            <div>
              <label>Name:</label>
              <input
                className="border p-2 w-full rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label>Email:</label>
              <input
                className="border p-2 w-full rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <p className="text-green-600">
              Saved as: {name} ({email})
            </p>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Settings</h3>

            <div className="flex justify-between">
              <span>Dark Mode</span>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </div>

            <div className="flex justify-between">
              <span>Notifications</span>
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
            </div>

            <p>
              Dark Mode: {darkMode ? "On" : "Off"}
            </p>
            <p>
              Notifications: {notifications ? "Enabled" : "Disabled"}
            </p>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Orders</h3>
            <ul className="list-disc ml-5">
              <li>Order #101 - Mouse</li>
              <li>Order #102 - Keyboard</li>
              <li>Order #103 - Monitor</li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;