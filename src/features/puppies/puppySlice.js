// import api from "../../store/api";

// /*
// TODO: Define the following 4 endpoints:
//   1. getPuppies (query)
//   2. getPuppy (query)
//   3. addPuppy (mutation)
//   4. deletePuppy (mutation)

// The query endpoints should provide the "Puppy" tag.
// The mutation endpoints should invalidate the "Puppy" tag.

// (Optional) TODO: Write `transformResponse` and `transformErrorResponse`
// functions for each endpoint.
// */

// const puppyApi = api.injectEndpoints({
//   endpoints: (build) => ({
//     // Endpoint to get all puppies
//     getPuppies: build.query({
//       query: () => "players", // Assuming 'players' is the endpoint for puppies
//       providesTags: ["Puppy"], // This will associate the response with the "Puppy" tag
//       transformResponse: (response) => response, // Optional, adjust as needed
//       transformErrorResponse: (error) => error, // Optional, adjust as needed
//     }),

//     // Endpoint to get a single puppy by id
//     getPuppy: build.query({
//       query: (id) => `players/${id}`, // Assuming each puppy has a unique id
//       providesTags: ["Puppy"], // This will associate the response with the "Puppy" tag
//       transformResponse: (response) => response, // Optional, adjust as needed
//       transformErrorResponse: (error) => error, // Optional, adjust as needed
//     }),

//     // Endpoint to add a new puppy
//     addPuppy: build.mutation({
//       query: (newPuppy) => ({
//         url: "players",
//         method: "POST",
//         body: newPuppy,
//       }),
//       // Invalidate "Puppy" tag after mutation to refetch data
//       invalidatesTags: ["Puppy"],
//       transformResponse: (response) => response, // Optional, adjust as needed
//       transformErrorResponse: (error) => error, // Optional, adjust as needed
//     }),

//     // Endpoint to delete a puppy
//     deletePuppy: build.mutation({
//       query: (id) => ({
//         url: `players/${id}`,
//         method: "DELETE",
//       }),
//       // Invalidate "Puppy" tag after mutation to refetch data
//       invalidatesTags: ["Puppy"],
//       transformResponse: (response) => response, // Optional, adjust as needed
//       transformErrorResponse: (error) => error, // Optional, adjust as needed
//     }),
//   }),
// });

// export const {
//   useGetPuppiesQuery,
//   useGetPuppyQuery,
//   useAddPuppyMutation,
//   useDeletePuppyMutation,
// } = puppyApi;

// export default puppyApi;
