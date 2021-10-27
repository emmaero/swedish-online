import iFileLink from "../interfaces/iFileLink";
import iVideoLink from "../interfaces/iVideoLink";

interface iProp {
  title: string;
  videos: iVideoLink[];
  files: iFileLink[];
}
export default function TeacherCourseCard({ title, videos, files }: iProp) {
  return (
    <div className="card medium">
      <div className="card-top">
        <h3>{title}</h3>
      </div>
      <div className="card-links">
        <span>{videos.length} videos</span>
        <span>{files.length} lessons</span>
      </div>
      <div className="card-buttons">
        <button className="btn button-secondary">Add clip</button>
        <button className="btn button-main">Add Lesson</button>
      </div>
    </div>
  );
}
