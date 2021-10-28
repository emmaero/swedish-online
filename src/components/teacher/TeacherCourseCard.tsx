import { useState } from "react";
import AddLessonForm from "./AddLessonForm";
import ModalContainer from "../shared/ModalContainer";
import useFetch from "../../customHooks/useFetch";
import iCourse from "../../interfaces/iCourse";
import UpdateCourse from "./UpdateCourse";
import { Link } from "react-router-dom";

interface iProp {
  course: iCourse;
}
export default function TeacherCourseCard({ course }: iProp) {
  const { id, title } = course;
  const initialComponent: React.FC = () => <></>;
  const path = `courses/${id}/lesson`;
  const { data} = useFetch(path);
  const [showModal, setShowModal] = useState(null);
  function displayLessonForm() {
    //@ts-ignore
    setShowModal(<AddLessonForm id={id} />);
  }
  function displayLessonEditForm() {
    //@ts-ignore
    setShowModal(<UpdateCourse course={course} />);
  }
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
      <div className="card-buttons">
        <button onClick={displayLessonForm} className="btn button-secondary">
          Add Lesson
        </button>
        <button onClick={displayLessonEditForm} className="btn button-main">
          Update Lesson
        </button>
      </div>
      <ModalContainer state={[showModal, setShowModal]} />
    </div>
  );
}
