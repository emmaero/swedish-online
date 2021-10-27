import iCourse from "./iCourse";
import Type from "./reducerTypes";

type Action =
  | { type: Type.CREATE_COURSE; payload: iCourse }
  | { type: Type.UPDATE_COURSE; payload: iCourse }
  | { type: Type.DELETE_COURSE; payload: string }
  | { type: Type.SET_COURSES; payload: iCourse[] };

export default Action;
