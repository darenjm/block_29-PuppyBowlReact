import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
  reducerPath: "authPath",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2411-ftb-et-web-pt-djm",
  }),
  tagTypes: ["Players"],
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => ({
        url: "/players",
      }),
      providesTags: ["Players"],
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
      invalidatesTags: ["Players"],
    }),
    deletePuppy: builder.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Players"],
    }),
  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyByIdQuery,
  usePostNewPuppyMutation,
  useDeletePuppyMutation,
} = authAPI;
