import { useDispatch } from "react-redux";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import coursesReducer from "./courses/coursesSlice";

export const rootReducer = combineReducers({
  courses: coursesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([]).concat(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
