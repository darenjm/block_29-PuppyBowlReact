import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
  reducerPath: "authPath",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2411-ftb-et-web-pt",
  }),
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => ({
        url: "/players",
      }),
    }),
    getPuppyById: builder.query({
      query: (id) => ({
        url: `/players/${id}`,
      }),
    }),
    postNewPuppy: builder.mutation({
      query: (body) => ({
        url: "/players",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetPuppiesQuery, useGetPuppyByIdQuery, usePostNewPuppyMutation } = authAPI;
