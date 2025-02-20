"use client";
import { useSelector } from "react-redux";

import { selectCourses } from "@/modules/courses/store/courses/coursesSlice";

import useGetAllCourses from "../../api/playlist/useGetAllCourses";
import CoursesListItem from "./CoursesListItem";

const CoursesList: React.FC = () => {
  const courseIds = useSelector(selectCourses);
  const { courses, isLoading, isFetching } = useGetAllCourses(
    courseIds.map((x) => x.playlistId) ?? []
  );

  return (
    <ul>
      {courseIds.map((item) => (
        <CoursesListItem
          key={item.id}
          slug={item.playlistId}
          id={item.id}
          courseTitle={
            courses.find((f) => f.id === item.playlistId)?.title ?? ""
          }
          isLoading={isLoading || isFetching}
        />
      ))}
    </ul>
  );
};

export default CoursesList;
