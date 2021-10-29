import { useHistory } from "react-router";
import ListComponent from "../shared/ListComponent";
import StudentItem from "./StudentItem";
import useFetch from "../../customHooks/useFetch";


export default function StudentList() {
  const path = "users";
  const { data } = useFetch(path);
  //@ts-ignore
  const students = data.filter((item) => item.isTeacher !== true);
  const history = useHistory();
  return (
    <div className="page-wrapper">
      <div className="page-inner">
        <button onClick={() => history.goBack()} className="btn button-main">
          Back
        </button>
        <h2>Lessons</h2>
        <ListComponent list={students} ComponentList={StudentItem} />
      </div>
    </div>
  );
}
