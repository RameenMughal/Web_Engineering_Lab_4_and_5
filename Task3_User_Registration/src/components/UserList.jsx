import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <div className="grid grid-cols-3 gap-6 mt-10">

      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}

    </div>
  );
}

export default UserList;