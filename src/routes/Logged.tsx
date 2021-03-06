import { useEffect, useState } from "react";
import { useUser } from "../states/UserProvider";
import StudentRoute from "./StudentRoute";
import TeacherRoute from "./TeacherRoute";

export default function Logged() {
    const [isTeacher, setIsTeacher] = useState(false);
  const { user } = useUser();
  useEffect(() => {
    if (user && user.isTeacher) setIsTeacher(true);
  }, [user]);
  return <>{isTeacher ? <TeacherRoute /> : <StudentRoute />}</>;
}
