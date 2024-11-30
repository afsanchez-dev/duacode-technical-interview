import { useNavigate } from "react-router";

export const BackButton = () => {
  const navigate = useNavigate();

  const navigateBack = (): void => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <button onClick={navigateBack}>
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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h14M5 12l4-4m-4 4 4 4"
        />
      </svg>
    </button>
  );
};
