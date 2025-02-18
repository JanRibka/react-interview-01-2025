"use client";

import { useEffect, useRef } from "react";

import { useCoursesSlice } from "@/modules/courses/store/courses/useCoursesSlice";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

const AddCourseForm: React.FC<Props> = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const { addCourse } = useCoursesSlice();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const youtubePlaylistId = formData.get("youtubePlaylistId");

    if (!!!youtubePlaylistId) {
      alert("Please enter a youtube playlist id");
      return;
    }

    addCourse(youtubePlaylistId as string);
    form.reset();
    ref.current?.focus();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Add a new course</h2>
      <label>
        youtube playlist id:
        <input ref={ref} type="text" name="youtubePlaylistId" />
      </label>
      <button type="submit">Add course</button>
    </form>
  );
};

export default AddCourseForm;
