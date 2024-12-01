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
    <div className="flex flex-col items-center p-4 -mt-10">
      <div className="max-w-md w-full bg-custom-secondary rounded-lg shadow-md p-6 overflow-hidden">
        <h2 className="text-4xl font-semibold text-red-300 mb-4 text-center">
          {errorMessage}
        </h2>
        <p className="text-lg text-custom-text-normal text-center mb-6">
          {errorDescription}
        </p>
        <div className="flex flex-col items-center">
          <Link to="/users" className="link text-lg font-medium mb-4">
            Go to Home
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="link text-lg font-medium"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
