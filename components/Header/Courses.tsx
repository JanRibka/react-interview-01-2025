"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

import useGetAllCourses from "@/modules/courses/api/playlist/useGetAllCourses";
import { selectCourses } from "@/modules/courses/store/courses/coursesSlice";

const Courses = () => {
  const courseIds = useSelector(selectCourses);

  const { courses } = useGetAllCourses(
    courseIds.map((x) => x.playlistId) ?? []
  );

  return (
    <>
      {courses.map((item, index) => (
        <li key={`${item.id}_${index}`}>
          <Link href={`/course/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </>
  );
};

export default Courses;
