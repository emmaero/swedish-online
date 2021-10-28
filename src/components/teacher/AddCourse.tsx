import { FormEvent, useState } from "react";
import InputField from "../shared/InputField";
import fields from "../../data/field-course.json";
import { createDocument } from "../../scripts/firestore";
import Type from "../../interfaces/reducerTypes";
import { useCourse } from "../../states/CourseProvider";

export default function AddCourse() {
  const { courses, dispatch } = useCourse();
  const [title, setTitle] = useState("");
 
    async function onAdd(event: FormEvent) {
        event.preventDefault();
      const courseInfo = {
        title: title
      };
      const id = await createDocument("courses", courseInfo);
      const course = { ...courseInfo, id: id };
      dispatch({ type: Type.CREATE_COURSE, payload: course });
    }
  return (
    <form>
      <h2>Add Course</h2>
      <InputField state={[title, setTitle]} options={fields.title} />
      <button onClick={onAdd} className="btn button-secondary">Add Course</button>
    </form>
  );
}
