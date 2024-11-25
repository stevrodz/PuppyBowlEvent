import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
// TODO: configure the store to use the API slice's auto-generated reducer and custom middleware.
const store = configureStore({
    reducer: {
      // Add the API slice reducer to the store
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware), // Add the API slice middleware
  });
export default store;
