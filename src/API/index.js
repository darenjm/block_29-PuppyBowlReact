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
  }),
});

export const { useGetPuppiesQuery } = authAPI;