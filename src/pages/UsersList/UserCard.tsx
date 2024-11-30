import { User } from "@appTypes/user/userType";

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="w-full rounded-lg shadow bg-custom-secondary">
      <div className="flex flex-col items-center w-full lg:w-60 p-10 text-center">
        <img
          className="object-cover w-24 h-24 mb-3 rounded-full shadow-lg"
          src={user.avatar}
          alt={user.first_name + " " + "image"}
        />
        <h5 className="mb-1 text-xl font-medium text-custom-text-normal">
          {user.first_name + " " + user.last_name}
        </h5>
        <div className="flex mt-4 md:mt-6">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-custom-text-normal bg-custom-primary hover:bg-blue-700 focus:ring-blue-800"
          >
            View more
          </a>
        </div>
      </div>
    </div>
  );
};
