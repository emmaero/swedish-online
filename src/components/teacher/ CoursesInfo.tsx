import { useState } from "react";
import { useCourse } from "../../states/CourseProvider";
import AddCourse from "./AddCourse";
import ModalContainer from "../shared/ModalContainer";

export default function CoursesInfo() {
  const initialComponent: React.FC = () => <></>;
  const [showModal, setShowModal] = useState(null);
  const { courses, dispatch } = useCourse();
  function displayCourseAdd() {
    //@ts-ignore
    setShowModal(<AddCourse />);
  }
  return (
    <div className="card medium">
      <div>
        <h3>Total courses</h3>
        <p>{courses.length} Courses</p>
      </div>
      <div className="card-single-button">
        <button className="button-main btn" onClick={displayCourseAdd}>
          Add course
        </button>
      </div>

      <ModalContainer state={[showModal, setShowModal]} />
    </div>
  );
}
