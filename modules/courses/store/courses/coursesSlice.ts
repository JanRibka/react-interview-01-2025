import { v4 as uuidv4 } from "uuid";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface Course {
  id: string;
  playlistId: string;
}

export type CoursesState = Course[];

export const initialState: CoursesState = [
  {
    id: uuidv4(),
    playlistId: "PLYPjPMiw3_YsVockWfuuhoP86YPDUXp4f",
  },
  {
    id: uuidv4(),
    playlistId: "UU8butISFwT-Wl7EV0hUK0BQ",
  },
  {
    id: uuidv4(),
    playlistId: "PLpcSpRrAaOaoIqHQddZOdbRrzr5dJtgSs",
  },
];

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action: PayloadAction<string>) => {
      state.push({ id: uuidv4(), playlistId: action.payload });
    },
    deleteCourse: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const actions = coursesSlice.actions;

export default coursesSlice.reducer;

// Selectors
export const selectCourses = (state: RootState) => state.courses;
