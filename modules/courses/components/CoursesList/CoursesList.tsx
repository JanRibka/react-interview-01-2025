"use client";
import { useSelector } from "react-redux";

import { selectCourses } from "@/modules/courses/store/courses/coursesSlice";

import CoursesListItem from "./CoursesListItem";

const CoursesList: React.FC = () => {
  const courses = useSelector(selectCourses);

  return (
    <ul>
      {courses.map((item) => (
        <CoursesListItem key={item.id} slug={item.playlistId} id={item.id} />
      ))}
    </ul>
  );
};

export default CoursesList;
