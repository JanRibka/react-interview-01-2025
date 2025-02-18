import { useCoursesSlice } from "@/modules/courses/store/courses/useCoursesSlice";

import styles from "./CoursesListItem.module.scss";

type Props = {
  slug: string;
  id: string;
};

const CoursesListItem: React.FC<Props> = ({ slug, id }) => {
  const { deleteCourse } = useCoursesSlice();

  const handleOnDelete = () => {
    deleteCourse(id);
  };

  return (
    <li className={styles["courses-list-item"]}>
      {slug}
      <button onClick={handleOnDelete}>remove course</button>
    </li>
  );
};

export default CoursesListItem;
