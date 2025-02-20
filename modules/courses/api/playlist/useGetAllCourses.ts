import { useEffect, useState } from "react";

import CourseEntity from "../../entities/Course";
import { useGetAllCoursesQuery } from "./playlistApi";

export interface Course {
  id: string;
  title: string;
}

const useGetAllCourses = (courseIds: string[]) => {
  const { data, isLoading, isFetching, refetch } =
    useGetAllCoursesQuery(courseIds);

  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (isLoading || isFetching) {
      return;
    }

    if (data) {
      setCourses(mapToCourse(data));
    }
  }, [data, isLoading, isFetching]);

  const mapToCourse = (data: CourseEntity[]) => {
    return data
      .filter((f) => !!f)
      .map((x) => {
        return {
          id: x.playlist.id,
          title: x.playlist.localized.title,
        } as Course;
      });
  };

  return {
    courses,
    setCourses,
    isLoading,
    isFetching,
    refetch,
  };
};

export default useGetAllCourses;
