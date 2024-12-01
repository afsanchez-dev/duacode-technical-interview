import { User } from "@appTypes/user/userType";

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="w-full rounded-lg shadow bg-custom-secondary">
      <div className="flex flex-col items-center gap-4 w-full lg:w-60 p-10 text-center">
        <img
          className="object-cover w-24 h-24 rounded-full shadow-lg"
          src={user.avatar}
          alt={user.first_name + " " + "image"}
        />
        <h5 className="text-xl font-medium text-custom-text-normal">
          {user.first_name + " " + user.last_name}
        </h5>
      </div>
    </div>
  );
};
