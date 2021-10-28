import { useParams } from "react-router";
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
  return (
    <div className="page-wrapper">
      <div className="page-inner">
              <h2>Lessons</h2>
              <h3>{ data.length}</h3>
        <ListComponent list={data} ComponentList={TeacherLessonItem} />
      </div>
    </div>
  );
}
