import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Type from "../../interfaces/reducerTypes";
import { updateDocument } from "../../scripts/firestore";
import { useCourse } from "../../states/CourseProvider";
import InputField from "../shared/InputField";
import fields from "../../data/field-course.json";
import iCourse from "../../interfaces/iCourse";
interface iProp {
  course: iCourse;
  setModal: Dispatch<SetStateAction<any>>;
}
export default function UpdateCourse({ course, setModal }: iProp) {
  const { id, title: name } = course;
  const { dispatch } = useCourse();
  const [title, setTitle] = useState(name);
  async function onUpdate(event: FormEvent) {
    event.preventDefault();
    const courseInfo = { ...course, title: title, id: id };
    await updateDocument("courses", id, courseInfo);
    dispatch({ type: Type.UPDATE_COURSE, payload: courseInfo });
    alert("Course update");
    setModal(null);
  }
  return (
    <form>
      <h2>Edit Course</h2>
      <InputField state={[title, setTitle]} options={fields.title} />
      <button onClick={onUpdate} className="btn button-secondary">
        Add Course
      </button>
    </form>
  );
}
