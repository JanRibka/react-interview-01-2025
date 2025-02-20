import { useDispatch } from "react-redux";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { mainBaseApi } from "../api/mainBaseApi";
import coursesReducer from "./courses/coursesSlice";

export const rootReducer = combineReducers({
  [mainBaseApi.reducerPath]: mainBaseApi.reducer,
  courses: coursesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainBaseApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
