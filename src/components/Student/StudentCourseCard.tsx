import { Link } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import iCourse from "../../interfaces/iCourse";
interface iProp {
  course: iCourse;
}
export default function StudentCourseCard({ course }: iProp) {
    const { id, title } = course;
      const path = `courses/${id}/lesson`;
      const { data } = useFetch(path);
  return (
    <div className="card medium">
      <div className="card-top">
        <h3>{title}</h3>
      </div>
      <div className="card-links">
        <Link className="link" to={`/course/${id}`}>
          {data.length} lessons
        </Link>
      </div>
    </div>
  );
}
