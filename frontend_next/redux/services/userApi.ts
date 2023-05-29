import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@/appConfig";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { MaybePromise } from "@reduxjs/toolkit/dist/query/tsHelpers";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

type User = {
  id: number;
  name: string;
  email: string;
  username: string;
};

export type BaseQueryFn<
  Args = any,
  Result = unknown,
  Error = unknown,
  DefinitionExtraOptions = {},
  Meta = {}
> = (
  args: Args,
  api: BaseQueryApi,
  extraOptions: DefinitionExtraOptions
) => MaybePromise<QueryReturnValue<Result, Error, Meta>>;

export interface BaseQueryApi {
  signal: AbortSignal;
  dispatch: ThunkDispatch<any, any, any>;
  getState: () => unknown;
}

export const userApi = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl,

    // prepareHeaders: (headers, { getState }) => {
    //   console.log("getState()", getState());
    //   const token = getState().auth.userToken;
    //   if (token) {
    //     // include token in req header
    //     headers.set("authorization", `Bearer ${token}`);
    //     return headers;
    //   }
    // },
  }),

  endpoints: (builder) => ({
    // updatePost: builder.mutation<User, Partial<User>>({
    //   // note: an optional `queryFn` may be used in place of `query`
    //   query: ({ id, ...post }) => ({
    //     url: `post/${id}`,
    //     method: "POST",
    //     body: post,
    //   }),
    // }),

    checkToken: builder.mutation({
      query: ({ token }) => ({
        url: `auth`,
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }),
      // invalidatesTags: ['Posts'],
    }),

    getUsers: builder.query<User[], null>({
      query: () => "users", // --> endpoint
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useCheckTokenMutation } =
  userApi;
