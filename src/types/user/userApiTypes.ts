import { User } from "./userType";

export interface ListUsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export type UserDetailResponse = {
  data: User;
};

export type CreateUserResponse = User;
