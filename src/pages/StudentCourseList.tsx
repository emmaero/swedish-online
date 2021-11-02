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

  // Nesting
  // If Prettier moves your code into 6 vertical lines it means we need to fix it.
  // In this case if ListComponent has a prop called ComponentList (same name but reversed) is a clue to where to start...

  // Here is an example on how to tackle it:
  const Error = "There are no lessons for this course yet. Contact the teacher";
  const StudyItems = <List list={data} component={StudentLessonItem} />; // noticed that i can rename ListComponent to List and renamed the prop to just component
  const lessons = data.length > 0 ? StudyItems : <p>Error</p>;

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
