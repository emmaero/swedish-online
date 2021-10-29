import { useHistory, useParams } from "react-router";
import ListComponent from "../components/shared/ListComponent";
import StudentLessonItem from "../components/Student/StudentLessonItem";
import useFetch from "../customHooks/useFetch";

type PropParams = {
  courseId: string;
};
export default function StudentCourseList() {
  const { courseId } = useParams<PropParams>();
  const path = `courses/${courseId}/lesson`;
  const { data } = useFetch(path);
  const history = useHistory();

  const lessons =
    data.length > 0 ? (
      <ListComponent list={data} ComponentList={StudentLessonItem} />
    ) : (
      <h3>There are no lessons for this course yet. Contact the teacher"</h3>
    );
  return (
    <div className="page-wrapper">
      <div className="page-inner">
        <button onClick={() => history.goBack()} className="btn button-main">
          Back
        </button>
        <h2>Lessons</h2>
        {lessons}
      </div>
    </div>
  );
}
