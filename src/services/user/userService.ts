import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ListUsersResponse } from "@appTypes/user/userApiTypes";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/users" }),
  endpoints: (builder) => ({
    getUsersListByPage: builder.query<ListUsersResponse, number>({
      query: (page) => `?page=${page}`,
    }),
  }),
});

export const { useGetUsersListByPageQuery } = userApi;
