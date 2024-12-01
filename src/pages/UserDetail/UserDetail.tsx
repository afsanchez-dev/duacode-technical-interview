import { BackButton } from "@appComponents/BackButton";
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
    <div className="animate-fade flex flex-col gap-6">
      {isLoading ? (
        <Spinner size={"10"} />
      ) : (
        <>
          <div className="flex min-w-full">
            {user != null && user.data != null ? (
              <UserCard user={user.data} isDetailed={true} isEditable={true} />
            ) : null}
          </div>
          <BackButton text="Go Back" />
        </>
      )}
    </div>
  );
};
