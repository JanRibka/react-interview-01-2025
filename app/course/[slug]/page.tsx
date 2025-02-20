"use client";
import CoursePageContainer from "@/modules/course/CoursePageContainer";

export default function Course({ params: { slug } }) {
  return <CoursePageContainer playlistId={slug} />;
}
