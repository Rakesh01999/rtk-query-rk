import { AddUserModal } from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

export default function Users() {
  const users = useAppSelector(selectUsers);
  console.log('users:',users);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      {/* Header Section */}
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto text-2xl font-semibold">Users</h1>
        {/* Add User Modal */}
        <AddUserModal />
      </div>

      {/* User List */}
      <div className="space-y-5 mt-5">
        {users.length > 0 ? (
          users.map((user) => <UserCard user={user} key={user.id} />)
        ) : (
          <p className="text-gray-500 text-center">No users found.</p>
        )}
      </div>
    </div>
  );
}
