import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CreateUserResponse,
  type ListUsersResponse,
} from "@appTypes/user/userApiTypes";
import { User } from "@appTypes/user/userType";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/users" }),
  endpoints: (builder) => ({
    getUsersListByPage: builder.query<ListUsersResponse, number>({
      query: (page) => `?page=${page}`,
    }),
    createUser: builder.mutation<CreateUserResponse, User>({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetUsersListByPageQuery, useCreateUserMutation } = userApi;
