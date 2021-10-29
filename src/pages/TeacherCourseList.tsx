import { useHistory, useParams } from "react-router";
import ListComponent from "../components/shared/ListComponent";
import useFetch from "../customHooks/useFetch";
import TeacherLessonItem from "../components/teacher/TeacherLessonItem";

type PropParams = {
  courseId: string;
};
export default function TeacherCourseList() {
    const { courseId } = useParams<PropParams>();
    const path = `courses/${courseId}/lesson`;
    const { data } = useFetch(path);
    const history = useHistory();
  return (
    <div className="page-wrapper">
          <div className="page-inner">
              <button onClick={()=>history.goBack()} className="btn button-main">Back</button>
              <h2>Lessons</h2>
        <ListComponent list={data} ComponentList={TeacherLessonItem} />
      </div>
    </div>
  );
}
