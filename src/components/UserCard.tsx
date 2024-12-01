import { useBreakpoint } from "@appHooks/useBreakpoint";
import { User } from "@appTypes/user/userType";

interface UserCardProps {
  user: User;
  isDetailed: boolean;
  isEditable: boolean;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  isDetailed,
  isEditable,
}) => {
  const breakpoint = useBreakpoint();

  const getEditButton = (): JSX.Element => {
    return (
      <button
        className="flex flex-row m-2 p-2 rounded-lg bg-custom-primary"
        aria-label="edit-user"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="square"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z"
          />
        </svg>
        {"Edit User"}
      </button>
    );
  };

  console.log(breakpoint);

  const getDetailedInfo = (): JSX.Element => {
    return (
      <h4 className="text-lg font-medium text-custom-text-subtle">
        {user.email}
      </h4>
    );
  };
  return (
    <div
      className={`flex flex-col max-w-full gap-2 rounded-lg shadow bg-custom-secondary ${
        isDetailed ? "-mt-10 p-2" : "w-72"
      }`}
    >
      <div className="flex flex-col items-center gap-4 mt-4 mb-4 pr-5 pl-5 sm:mt-8 sm:mb-8 sm:pr-10 sm:pl-10 text-center">
        <img
          className={`object-cover ${
            isEditable || isDetailed ? "w-40 h-40 md:w-64 md:h-64" : "w-32 h-32"
          } rounded-full shadow-lg`}
          src={user.avatar}
          alt={user.first_name + " " + "image"}
        />
        <div>
          <h5 className="text-2xl font-medium text-custom-text-normal">
            {user.first_name + " " + user.last_name}
          </h5>
          {isDetailed ? getDetailedInfo() : null}
          {isEditable ? (
            <div className="flex mt-2 justify-center">{getEditButton()}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};