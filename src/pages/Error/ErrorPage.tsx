import React from "react";
import { Link, useNavigate } from "react-router";

interface ErrorPageProps {
  errorMessage: string;
  errorDescription: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  errorMessage,
  errorDescription,
}) => {
  const navigate = useNavigate();

  return (
    <div className="relative top-1/2 translate-y-1/2 flex flex-col items-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 overflow-hidden">
        <h2 className="text-4xl font-semibold text-red-600 mb-4 text-center">
          {errorMessage}
        </h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          {errorDescription}
        </p>
        <div className="flex flex-col items-center">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 text-lg font-medium mb-4"
          >
            Go to Home
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:text-blue-800 text-lg font-medium"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
