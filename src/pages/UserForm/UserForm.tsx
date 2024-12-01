import { Spinner } from "@appComponents/Spinner";
import {
  useCreateUserMutation,
  useGetUserByIdQuery,
} from "@appServices/user/userService";
import { User } from "@appTypes/user/userType";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { ToastNotification } from "./ToastNotification";
import { useNavigate, useParams } from "react-router";
import { ErrorPage } from "@appPages/Error/ErrorPage";
import { BackButton } from "@appComponents/BackButton";

interface UserFormProps {
  isCreate: boolean;
}
export const UserForm: React.FC<UserFormProps> = ({ isCreate }) => {
  const refAvatar = useRef<HTMLInputElement>(null);
  const refEmail = useRef<HTMLInputElement>(null);
  const refFirstName = useRef<HTMLInputElement>(null);
  const refLastName = useRef<HTMLInputElement>(null);

  const [avatarImg, setAvatarImg] = useState<string>("");
  const [avatarError, setAvatarError] = useState<string>("");
  const [createUser, useCreateUserResult] = useCreateUserMutation();
  const { data, isLoading, isError } = useCreateUserResult;
  const [isClosedToast, setIsClosedToast] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>(-1);

  const params = useParams();

  useEffect(() => {
    if (params != null && params.id != null) {
      setUserId(parseInt(params.id));
    }
  }, [params]);

  const { data: user, isError: isErrorUser } = useGetUserByIdQuery(userId, {
    skip: userId === -1,
  });

  useEffect(() => {
    if (user != null) {
      setAvatarImg(user.data.avatar);
      if (refEmail.current != null) refEmail.current.value = user.data.email;
      if (refFirstName.current != null)
        refFirstName.current.value = user.data.first_name;
      if (refLastName.current != null)
        refLastName.current.value = user.data.last_name;
    }
  }, [user, isError]);

  const navigate = useNavigate();

  const invalidFileTypeMsg = "The avatar must be a .jpg or a .png file.";

  const checkAvatarValidity = (): boolean => {
    const avatar = refAvatar.current;

    if (avatar && avatar.files != null && avatar.files[0] != null) {
      const avatarFile = avatar.files[0];
      if (avatarFile.type !== "image/png" && avatarFile.type !== "image/jpeg") {
        return false;
      }
    }
    return true;
  };

  const handleAvatarChange = (): void => {
    const avatar = refAvatar.current;

    if (checkAvatarValidity()) {
      if (avatar && avatar.files != null) {
        const avatarFile = avatar.files[0];
        const objectURL = URL.createObjectURL(avatarFile);
        setAvatarImg(objectURL);
        setAvatarError("");
        return;
      }
    }
    setAvatarImg("");
    setAvatarError(invalidFileTypeMsg);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setAvatarError("");

    const email = refEmail.current?.value;
    const firstName = refFirstName.current?.value;
    const lastName = refLastName.current?.value;

    if (!checkAvatarValidity()) {
      setAvatarError(invalidFileTypeMsg);
      return;
    }

    if (email == null || firstName == null || lastName == null) {
      return;
    }

    const newUser: User = {
      id: Math.ceil(Math.random() * 40), // Should use uuid generator, but this is just an example.
      email: email.toLowerCase(),
      first_name: firstName,
      last_name: lastName,
      avatar: avatarImg,
    };

    createUser(newUser);
  };

  useEffect(() => {
    if (data != null) {
      setTimeout(() => navigate("/users"), 3200);
    }
  }, [data, navigate]);

  if (isErrorUser) {
    return (
      <ErrorPage
        errorMessage={"User data fetching failed"}
        errorDescription={
          "Something unexpected happened or the user does not exist."
        }
      />
    );
  }

  return (
    <div className="flex flex-col max-w-full gap-4 items-center justify-center -mt-12">
      <h2 className="text-2xl font-semibold mb-2">
        {isCreate ? "Create new user" : "Edit User"}
      </h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col justify-center gap-4">
          {/** Avatar */}
          <div
            id="avatar-selector"
            className="flex items-center justify-center w-full"
          >
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-32 h-32 border-1  border-dashed rounded-full cursor-pointer bg-gray-700 border-gray-600 hover:border-gray-500 hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {avatarImg.length > 0 ? (
                  <img
                    className="object-cover rounded-full w-32 h-32 border-2"
                    src={avatarImg}
                    alt="Your avatar photo"
                  ></img>
                ) : (
                  <svg
                    className="w-16 h-16 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleAvatarChange}
                ref={refAvatar}
              />
            </label>
            <Tooltip
              className="z-10"
              anchorSelect="#avatar-selector"
              place="bottom"
            >
              {"Select a .png or .jpg file to add an avatar (optional)"}
            </Tooltip>
          </div>
          {avatarImg.length > 0 ? (
            <button
              type="button"
              className="btn flex flex-row gap-1 items-center -mt-1 text-sm mx-auto rounded-lg bg-custom-primary p-2 max-w-fit"
              onClick={() => setAvatarImg("")}
            >
              <svg
                className="w-4 h-4 text-white"
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
                  d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                />
              </svg>
              {" Delete avatar"}
            </button>
          ) : null}
          {avatarError.length > 0 ? (
            <div className="flex max-w-full items-center justify-center mb-1">
              <span className="text-custom-error-primary">{avatarError}</span>
            </div>
          ) : null}

          {/** Email */}
          <div id="email-container">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              <span className="text-custom-text-normal">
                Email{" "}
                <span className="text-custom-text-subtle">(required)</span>
              </span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                ref={refEmail}
                id="email"
                className="input"
                placeholder="name@duacode.com"
                required
              />
            </div>
          </div>
          {/** First name */}
          <div id="first-name-container">
            <label
              htmlFor="first-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-custom-text-normal">
                First name{" "}
                <span className="text-custom-text-subtle">(required)</span>
              </span>
            </label>
            <input
              type="text"
              id="first-name"
              className="input ps-4"
              placeholder="John"
              ref={refFirstName}
              required
            />
          </div>
          {/** Last name */}
          <div id="last-name-container">
            <label
              htmlFor="last-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span className="text-custom-text-normal">
                Last name{" "}
                <span className="text-custom-text-subtle">(required)</span>
              </span>
            </label>
            <input
              type="text"
              id="last-name"
              className="input ps-4"
              placeholder="Doe"
              ref={refLastName}
              required
            />
          </div>
          <button
            type="submit"
            autoFocus={true}
            className="btn mt-2 mx-auto rounded-lg bg-custom-primary p-2"
            disabled={data != null}
          >
            {isLoading ? <Spinner size={"6"} /> : "Submit"}
          </button>
        </div>
      </form>
      <div className="mt-4">
        <BackButton text="Go back" />
      </div>
      {data != null && !isClosedToast ? (
        <ToastNotification
          title={isCreate ? "User created" : "User updated"}
          description={isCreate ? "has been created" : "has been updated"}
          user={data}
          isError={isError}
          onClose={() => setIsClosedToast(true)}
        />
      ) : null}
    </div>
  );
};
