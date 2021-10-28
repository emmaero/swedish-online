import { FormEvent, useState } from "react";
import Type from "../../interfaces/reducerTypes";
import { updateDocument } from "../../scripts/firestore";
import { useCourse } from "../../states/CourseProvider";
import InputField from "../shared/InputField";
import fields from "../../data/field-course.json";
import iCourse from "../../interfaces/iCourse";
interface iProp {
  course: iCourse;
}
export default function UpdateCourse({ course }: iProp) {
  const { id, title:name } = course;
  const { courses, dispatch } = useCourse();
  const [title, setTitle] = useState(name);
  async function onUpdate(event: FormEvent) {
    event.preventDefault();
    const courseInfo = {...course,title: title};
 await updateDocument("courses",id, courseInfo);
    dispatch({ type: Type.CREATE_COURSE, payload: course });
  }
  return (
    <form>
      <h2>Add Course</h2>
      <InputField state={[title, setTitle]} options={fields.title} />
      <button onClick={onUpdate} className="btn button-secondary">
        Add Course
      </button>
    </form>
  );
}
