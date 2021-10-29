import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useParams } from "react-router-dom";
import fields from "../../data/field-lesson.json";
import iLesson from "../../interfaces/iLesson";
import { updateDocument } from "../../scripts/firestore";
import FileUploader from "../shared/ImageUploader";
import InputField from "../shared/InputField";
interface iProp {
  lesson: iLesson;
  setModal: Dispatch<SetStateAction<any>>;
}
type PropParams = {
  courseId: string;
};
export default function UpdateLessonForm({ lesson, setModal }: iProp) {
  const { id, title: name, fileURL: url, youtubeURL } = lesson;
  const [title, setTitle] = useState(name);
  const [videoURL, setVideoURL] = useState(youtubeURL);
  const [fileURL, setFileURL] = useState(url);
  const { courseId } = useParams<PropParams>();
  const path = `courses/${courseId}/lesson`;
  async function onUpdate(event: FormEvent) {
    event.preventDefault();
    const lessonInfo = {
      title: title,
      youtubeURL: videoURL,
      fileURL: fileURL,
    };
    await updateDocument(path, id, lessonInfo);
    alert("Updated successfully");
    setModal(null);
  }
  return (
    <form>
      <h2>Update Lesson</h2>
      <InputField state={[title, setTitle]} options={fields.title} />
      <InputField state={[videoURL, setVideoURL]} options={fields.videoURL} />
      <FileUploader folder="Lectures" name={title} hook={[setFileURL]} />
      <button onClick={onUpdate} className="btn button-secondary">
        Update
      </button>
    </form>
  );
}
