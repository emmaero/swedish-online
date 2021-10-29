import iLesson from "../../interfaces/iLesson";


interface iProp {
  item: iLesson;
}
export default function StudentLessonItem({ item }: iProp) {
       const { title, fileURL, youtubeURL } = item;
    
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
    </div>
  );
}
