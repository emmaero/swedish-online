import { useCallback, useEffect, useState } from "react";
import TeacherDashboard from "../components/teacher/TeacherDashboard";
import Type from "../interfaces/reducerTypes";
import { getCollection } from "../scripts/firestore";
import { useCourse } from "../states/CourseProvider";

export default function TeacherPage() {
  const path = "courses";

  const { dispatch } = useCourse();
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  // Tip: At this point this piece of code is quite repeated across the project,
  // Investgin on how to make a customHook will pay off!
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
    <div>
      {status === 0 && <p>Loading ...</p>}
      {status === 1 && <TeacherDashboard />}
      {status === 2 && <p>Error</p>}
    </div>
  );
}
