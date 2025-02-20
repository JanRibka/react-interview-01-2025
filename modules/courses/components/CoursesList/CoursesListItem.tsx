import { useCoursesSlice } from "@/modules/courses/store/courses/useCoursesSlice";

import styles from "./CoursesListItem.module.scss";

type Props = {
  slug: string;
  id: string;
  courseTitle: string;
  isLoading: boolean;
};

const CoursesListItem: React.FC<Props> = ({
  slug,
  id,
  courseTitle,
  isLoading,
}) => {
  const { deleteCourse } = useCoursesSlice();

  const handleOnDelete = () => {
    deleteCourse(id);
  };

  let title = `${slug}`;

  if (!!courseTitle) {
    title += ` - ${courseTitle}`;
  } else if (!isLoading) {
    title += " - Invalid Id";
  }

  return (
    <li className={styles["courses-list-item"]}>
      {title}
      <button onClick={handleOnDelete}>remove course</button>
    </li>
  );
};

export default CoursesListItem;
