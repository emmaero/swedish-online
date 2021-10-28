import iLesson from "../../interfaces/iLesson";

interface iProp{
    item: iLesson;
}

export default function TeacherLessonItem({ item }: iProp) {
    const { title, fileUrl, youtubeURL } = item;
    return (
        <div className="lesson-card">
            <h2>{title}</h2>
            <a href={fileUrl}>Lesson pdf</a>
        </div>
    )
}
