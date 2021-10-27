import TeacherDashboard from "../components/TeacherDashboard";
import useFetch from "../customHooks/useFetch";
import Type from "../interfaces/reducerTypes";
import { useCourse } from "../states/CourseProvider";

export default function TeacherPage() {
  const path = "courses";
  const { data, loading, error } = useFetch(path);
  const { dispatch } = useCourse();
  data && dispatch({ type: Type.SET_COURSES, payload: data });
  return (
    <div>
      {loading && <p>{loading}</p>}
      {data && <TeacherDashboard />}
      {error && <p>{error}</p>}
    </div>
  );
}
