import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import InputField from "../shared/InputField";
import fields from "../../data/field-lesson.json";
import { createDocument } from "../../scripts/firestore";
import FileUploader from "../shared/ImageUploader";

interface iProp {
  id: string;
  setModal: Dispatch<SetStateAction<any>>;
}
export default function AddLessonForm({ id, setModal }: iProp) {
  const [title, setTitle] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [fileURL, setFileURL] = useState("");

  const path = `courses/${id}/lesson`;
  async function onAdd(event: FormEvent) {
    event.preventDefault();
    const lesson = {
      title: title,
      youtubeURL: videoURL,
      fileURL: fileURL,
    };
    await createDocument(path, lesson);
    alert("Lesson added");
    setModal(null);
  }
  return (
    <form>
      <h2>Add Course</h2>
      <InputField state={[title, setTitle]} options={fields.title} />
      <InputField state={[videoURL, setVideoURL]} options={fields.videoURL} />
      <FileUploader folder="Lectures" name={title} hook={[setFileURL]} />
      <button onClick={onAdd} className="btn button-secondary">
        Add
      </button>
    </form>
  );
}
