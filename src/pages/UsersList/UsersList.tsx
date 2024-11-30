import { useState } from "react";
import { useGetUsersListByPageQuery } from "@appServices/user/userService";
import { Spinner } from "@appComponents/Spinner";
import { UserCard } from "@appPages/UsersList/UserCard";
import { Pagination } from "@appComponents/Pagination";
import { ErrorPage } from "@appPages/Error/ErrorPage";

export const UsersList = () => {
  const [page, setPage] = useState(1);
  const {
    data: usersListResp,
    isError,
    isLoading,
  } = useGetUsersListByPageQuery(page);

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
    <div className="flex flex-col items-center">
      <div className="flex-row gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="mx-auto grid grid-cols-1 gap-4 max-w-fit md:grid-cols-2 lg:grid-cols-3">
            {usersListResp.data.map((user) => {
              return (
                <div key={user.id}>
                  <UserCard user={user} />
                </div>
              );
            })}
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
      </div>
    </div>
  );
};
