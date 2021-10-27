import React from "react";
import CoursesInfo from "./ CoursesInfo";
import NavLogged from "./NavLogged";
import { useUser } from "../states/UserProvider";
import iCourse from "../interfaces/iCourse";
import { useCourse } from "../states/CourseProvider";
import TeacherCourseCard from "./TeacherCourseCard";

interface iProp {
  data: iCourse[];
}
export default function TeacherDashboard() {
  const { user } = useUser();
  const { courses } = useCourse();
  const courseList = courses.map((item: iCourse) => (
    <TeacherCourseCard
      title={item.title}
      videos={item.videos}
      files={item.files}
    />
  ));
  return (
    <div className="page-wrapper">
      <div className="page-inner">
        <NavLogged />
        <h2>Hi, {user.name}</h2>
        <CoursesInfo />
        <div className="courses">
          <h2>Courses</h2>
          <div className="course-list">{courseList}</div>
        </div>
      </div>
    </div>
  );
}
