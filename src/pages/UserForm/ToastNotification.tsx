import { User } from "@appTypes/user/userType";

interface ToastNotificationProps {
  title: string;
  description: string;
  user: User;
  isError: boolean;
  onClose: () => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  title,
  description,
  user,
  isError,
  onClose,
}) => {
  {
    /** TODO when styling */
  }
  const toastColorScheme = isError
    ? "bg-custom-error-secondary"
    : "bg-gray-800";

  return (
    <div
      id="toast-notification"
      className={`fixed top-5 rtl:divide-x-reverse w-full max-w-xs p-4 rounded-lg shadow ${toastColorScheme} text-gray-300 animate-fade-down`}
      role="alert"
    >
      <div className="flex items-center mb-3">
        <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          {title}
        </span>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Close"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center">
        <div className="relative inline-block shrink-0">
          {user.avatar.length > 0 ? (
            <img
              className="object-cover w-12 h-12 rounded-full"
              src={user.avatar}
              alt={user.first_name + " " + user.last_name + " image"}
            />
          ) : null}
        </div>
        <div className="ms-3 text-sm font-normal">
          <span className="font-semibold text-gray-900 dark:text-white">
            {user.first_name + " " + user.last_name + " "}
          </span>
          {description}
          <div>
            <span className="text-custom-accent">{"Redirecting..."}</span>
          </div>
        </div>
      </div>
    </div>
  );
};