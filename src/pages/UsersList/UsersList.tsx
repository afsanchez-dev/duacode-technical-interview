import { useState } from "react";
import { useGetUsersListByPageQuery } from "@appServices/user/userService";
import { Spinner } from "@appComponents/Spinner";
import { UserCard } from "@appComponents/UserCard";
import { Pagination } from "@appComponents/Pagination";
import { ErrorPage } from "@appPages/Error/ErrorPage";
import { Link, useNavigate } from "react-router";

export const UsersList = () => {
  const [page, setPage] = useState(1);
  const {
    data: usersListResp,
    isError,
    isLoading,
  } = useGetUsersListByPageQuery(page);
  const navigate = useNavigate();

  const handleCreateUser = () => navigate("/create-user");

  if (isLoading) {
    return (
      <div className="flex items-center">
        <Spinner />
      </div>
    );
  } else if (isError || usersListResp == null) {
    return (
      <ErrorPage
        errorMessage={"Something went wrong"}
        errorDescription={"An error occurred when searching users"}
      />
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col max-w-fit items-center md:items-start">
        <button
          onClick={handleCreateUser}
          className="bg-blue-600 p-2 rounded-lg mb-4"
        >
          <div className="flex flex-row gap-2">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Create new user
          </div>
        </button>
        <div className="grid grid-cols-1 gap-8 max-w-fit md:grid-cols-2 lg:grid-cols-3">
          {usersListResp.data.map((user) => {
            return (
              <Link key={user.id} to={`/${user.id}`}>
                <UserCard user={user} isDetailed={false} isEditable={false} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-4">
        {/** Modify this to check how the Pagination component works with multiple pages ;)*/}
        <Pagination
          currPage={page}
          totalPages={usersListResp.total_pages}
          setPage={setPage}
        />
      </div>
    </div>
  );
};
