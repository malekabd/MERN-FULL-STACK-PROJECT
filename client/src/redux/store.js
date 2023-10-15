import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"; // since we export it as default we can name it as we want

export const store = configureStore({
  reducer: { user: userReducer },
  middleware: (
    getDefaultMiddleware //to prevent error
  ) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
