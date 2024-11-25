import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = "2408-ftb-et-web-am";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;

// TODO: configure createApi to use API_URL as the base URL
// TODO: add "Puppy" as a tag type.

const api = createApi({
  reducerPath: "api", // You can define a name for the reducer path here
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Puppy"], // Add 'Puppy' as a tag type

  endpoints: (build) => ({
    // Endpoint to get all puppies
    getPuppy: build.query({
        query: (id) => `players/${id}`, // Assuming each puppy has a unique id
        providesTags: ["Puppy"], // This will associate the response with the "Puppy" tag
        transformResponse: (response) => response.data.player, // Optional, adjust as needed
        transformErrorResponse: (error) => error, // Optional, adjust as needed
      }),
    getAllPuppies: build.query({
      query: () => "players", // Assuming 'players' is the endpoint for puppies
      providesTags: ["Puppy"], // This will associate the response with the "Puppy" tag
      transformResponse: (response) => response.data.players, // Optional, adjust as needed
      transformErrorResponse: (error) => error, // Optional, adjust as needed
    }),

    // Endpoint to get a single puppy by id
    

    // Endpoint to add a new puppy
    addPuppy: build.mutation({
      query: (newPuppy) => ({
        url: "players",
        method: "POST",
        body: newPuppy,
      }),
      // Invalidate "Puppy" tag after mutation to refetch data
      invalidatesTags: ["Puppy"],
      transformResponse: (response) => response, // Optional, adjust as needed
      transformErrorResponse: (error) => error, // Optional, adjust as needed
    }),

    // Endpoint to delete a puppy
    deletePuppy: build.mutation({
      query: (id) => ({
        url: `players/${id}`,
        method: "DELETE",
      }),
      // Invalidate "Puppy" tag after mutation to refetch data
      invalidatesTags: ["Puppy"],
      transformResponse: (response) => response, // Optional, adjust as needed
      transformErrorResponse: (error) => error, // Optional, adjust as needed
    }),
  }),
});

export const { useGetAllPuppiesQuery,
    useGetPuppyQuery,
    useAddPuppyMutation,
    useDeletePuppyMutation, } = api;

export default api;
