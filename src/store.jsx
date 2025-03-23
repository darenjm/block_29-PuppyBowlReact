import { configureStore } from "@reduxjs/toolkit";
import { authAPI } from "./API/index";

const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authAPI.middleware)
});

export default store;
