import iCourse from '../../interfaces/iCourse';
import { useCourse } from '../../states/CourseProvider';
import StudentCourseCard from './StudentCourseCard';

export default function StudentDashboard() {
    const { courses } = useCourse();
    const courseList = courses.map((item: iCourse) => (
      <StudentCourseCard key={item.id} course={item} />
    ));
    return (
          <div className="course-list">{courseList}</div>
    );
}
