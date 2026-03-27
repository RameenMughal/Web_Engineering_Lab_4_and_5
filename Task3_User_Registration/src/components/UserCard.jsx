function UserCard({ user }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow text-center">

      <div className="w-16 h-16 bg-purple-500 text-white flex items-center justify-center rounded-full mx-auto mb-3 text-xl">
        {user.name.charAt(0)}
      </div>

      <h3 className="font-bold">{user.name}</h3>
      <p className="text-gray-500">{user.role}</p>

    </div>
  );
}

export default UserCard;