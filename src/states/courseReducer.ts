import iCourse from "../interfaces/iCourse";
import Action from "../interfaces/reducerAction";
import Type from "../interfaces/reducerTypes";

function courseReducer(state: iCourse[], action: Action): iCourse[] {
  switch (action.type) {
    case Type.CREATE_COURSE:
      return createCourse(state, action);
    case Type.UPDATE_COURSE:
      return updateCourse(state, action);
    case Type.SET_COURSES:
      return setCourses(state, action);
    default:
      throw new Error("No action type found");
  }
}

function updateCourse(state: iCourse[], action: Action) {
  const { payload } = action;
  const course = payload as iCourse;
  const newState = [...state];
  const index = newState.findIndex((item) => item.id === course.id);

  newState[index] = { ...course };
  return newState;
}

function setCourses(state: iCourse[], action: Action) {
  const { payload } = action;
  const newCourses: iCourse[] = payload as iCourse[];

  if (payload !== null) return newCourses;
  return state;
}

function createCourse(state: iCourse[], action: Action) {
  const { payload } = action;
  const course = payload as iCourse;
  state.forEach((item) => {
    if (item.title === course.title) return state;
  });
  return [...state, course];
}
export default courseReducer;
