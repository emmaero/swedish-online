import { useCallback, useEffect, useState } from "react";
import { useCourse } from "../states/CourseProvider";
import { getCollection } from "../scripts/firestore";
import NavLogged from "../components/shared/NavLogged";
import StudentDashboard from "../components/Student/StudentDashboard";
import Type from "../interfaces/reducerTypes";
import { useUser } from "../states/UserProvider";
import StudentNavBar from "../components/shared/StudentNavBar";

export default function StudentPage() {
  const { user } = useUser();
  const path = "courses";

  const { dispatch } = useCourse();
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error
  const courseCallback = useCallback(
    async (path) => {
      try {
        const courses = await getCollection(path);
        dispatch({ type: Type.SET_COURSES, payload: courses });
        setStatus(1);
      } catch {
        setStatus(2);
      }
    },
    [dispatch]
  );
  useEffect(() => {
    courseCallback(path);
  }, [courseCallback]);

  return (
    <div className="page-wrapper">
      <StudentNavBar />
      <div className="page-inner">
        <div className="main">
          <h2>Hi {user.name.toUpperCase()}</h2>
          {status === 0 && <p>Loading ...</p>}
          {status === 1 && <StudentDashboard />}
          {status === 2 && <p>Error</p>}
        </div>
      </div>
    </div>
  );
}
