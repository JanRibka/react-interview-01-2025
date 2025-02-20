import Course from "../../entities/Course";
import { mainBaseApi } from "../mainBaseApi";

const apiUrl = "/api";

export const playlistApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCourses: build.query<Course[], string[]>({
      queryFn: async (courseIds: string[]) => {
        try {
          if (!Array.isArray(courseIds)) {
            return {
              error: {
                status: 400,
                error: "Bad request - input must be an array",
              },
            };
          }

          const promises = courseIds.map(async (id) => {
            if (typeof id !== "string") {
              return Promise.reject(new Error("Invalid filename type"));
            }
            const response = await fetch(`${apiUrl}/playlist`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                id: id,
              }),
            });

            if (!response.ok) {
              // throw new Error(`Failed to fetch ${id}: ${response.statusText}`);
              return;
            }
            const x = await response.json();
            return x;
          });

          const results = await Promise.all(promises);

          return { data: results };
        } catch (error) {
          if (error instanceof Error) {
            return { error: { status: 500, error: error.message } };
          }

          return {
            error: {
              status: 500,
              error: "An unknown error occurred",
              data: "",
            },
          };
        }
      },
    }),
  }),
});

export const { useGetAllCoursesQuery } = playlistApi;
