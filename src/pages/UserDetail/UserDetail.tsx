import { Spinner } from "@appComponents/Spinner";
import { UserCard } from "@appComponents/UserCard";
import { ErrorPage } from "@appPages/Error/ErrorPage";
import { useGetUserByIdQuery } from "@appServices/user/userService";
import { useParams } from "react-router";

export const UserDetail = () => {
  const params = useParams();
  const id = params.id != null ? parseInt(params.id) : -1;
  const { data: user, isLoading, isError } = useGetUserByIdQuery(id);

  if (isError) {
    return (
      <ErrorPage
        errorMessage={`Unable to load user with id: ${id}`}
        errorDescription={"The user you are looking for may not exist."}
      />
    );
  }
  return (
    <div className="flex min-w-full">
      {isLoading ? <Spinner /> : null}
      {user != null && user.data != null ? (
        <UserCard user={user.data} isDetailed={true} isEditable={true} />
      ) : null}
    </div>
  );
};
