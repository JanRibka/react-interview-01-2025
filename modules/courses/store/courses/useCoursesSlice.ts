import { useAppDispatch } from "../store";
import { actions } from "./coursesSlice";

export const useCoursesSlice = () => {
  const dispatch = useAppDispatch();

  const addCourse = (name: string) => {
    dispatch(actions.addCourse(name));
  };

  const deleteCourse = (id: string) => {
    dispatch(actions.deleteCourse(id));
  };

  return { addCourse, deleteCourse };
};
