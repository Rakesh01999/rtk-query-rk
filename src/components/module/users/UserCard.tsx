import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";
import { Trash2Icon } from "lucide-react";

interface IProps {
  user: IUser;
}

export default function UserCard({ user }: IProps) {
  const dispatch = useAppDispatch();

  const handleRemoveUser = (userId: string) => {
    dispatch(removeUser(userId));
  };

  return (
    <div className="flex justify-between items-center p-4 border rounded shadow-sm">
      {/* User Name */}
      <h2 className="text-lg font-medium">{user.name}</h2>

      {/* Trash Button */}
      <Button
        variant="ghost"
        className="flex items-center text-red-500 hover:text-red-700"
        onClick={() => handleRemoveUser(user.id)}
        // onClick={() => removeUser(user.id)}
      >
        <Trash2Icon className="mr-2 h-4 w-4" />
      </Button>
    </div>
  );
}
