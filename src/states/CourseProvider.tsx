import { createContext, ReactNode, useContext, useReducer } from "react";
//Project files
import courseReducer from "./courseReducer";
import iCourse from "../interfaces/iCourse";

interface iProp {
  children: ReactNode;
}
interface iContext {
  courses: iCourse[];
  dispatch: Function;
}
const initialState: iCourse[] = [];
//Properties
const CourseContext = createContext<iContext>({
  courses: initialState,
  dispatch: () => console.warn("CourseContext used outside provider"),
});
export function CourseProvider({ children }: iProp) {
  //Local state
  const [courses, dispatch] = useReducer(courseReducer, initialState);
  return (
    <CourseContext.Provider value={{ courses, dispatch }}>
      {children}
    </CourseContext.Provider>
  );
}
export function useCourse() {
  const context = useContext(CourseContext);
  return context;
}
