import { useState } from "react";
import { useGetUsersListByPageQuery } from "@appServices/user/userService";
import { Spinner } from "@appComponents/Spinner";
import { UserCard } from "@appPages/UsersList/UserCard";
import { Pagination } from "@appComponents/Pagination";

export const UsersList = () => {
  const [page, setPage] = useState(1);
  const {
    data: usersListResp,
    isError,
    isLoading,
  } = useGetUsersListByPageQuery(page);

  return (
    <div className="flex flex-col items-center">
      <div className="flex-row gap-4">
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          "Error" /** TODO Error page */
        ) : usersListResp != null ? (
          <div className="flex flex-col items-center gap-2">
            <div className="mx-auto grid grid-cols-1 gap-4 max-w-fit md:grid-cols-2 lg:grid-cols-3">
              {usersListResp.data.map((user) => {
                return <UserCard user={user} />;
              })}
            </div>
            <div className="mt-4">
              <Pagination
                currPage={page}
                totalPages={usersListResp.total_pages}
                setPage={setPage}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
