import { useState } from "react";
import { useParams } from "react-router-dom";
import iLesson from "../../interfaces/iLesson";
import { deleteDocument } from "../../scripts/firestore";
import ModalContainer from "../shared/ModalContainer";
import UpdateLessonForm from "./UpdateLessonForm";

interface iProp {
  item: iLesson;
}
type PropParams = {
  courseId: string;
};

export default function TeacherLessonItem({ item }: iProp) {
  const { id, title, fileURL, youtubeURL } = item;
  const [showModal, setShowModal] = useState(null);
  const { courseId } = useParams<PropParams>();
  const path = `courses/${courseId}/lesson`;
  function displayLessonEditForm() {
    //@ts-ignore
    setShowModal(<UpdateLessonForm lesson={item} setModal={setShowModal} />);
  }
  async function onDelete(id: string) {
    await deleteDocument(path, id);
    alert("Lesson deleted");
  }
  return (
    <div className="card-secondary">
      <div className="top">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        <a href={fileURL} target="_blank" rel="noopener noreferrer">
          Lesson pdf
        </a>
        <a href={youtubeURL} target="_blank" rel="noopener noreferrer">
          Watch clip
        </a>
      </div>
      <div className="card-buttons">
        <button onClick={() => onDelete(id)} className="btn button-secondary">
          Delete
        </button>
        <button onClick={displayLessonEditForm} className="btn button-main">
          Edit
        </button>
      </div>
      <ModalContainer state={[showModal, setShowModal]} />
    </div>
  );
}
