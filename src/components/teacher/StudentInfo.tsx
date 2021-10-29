import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";

export default function StudentInfo() {
  const path = "users";
    const { data } = useFetch(path);
    //@ts-ignore
    const students = data.filter((item)=>item.isTeacher!==true)
  return (
    <div className="card large">
      <div>
        <h3>Number of student</h3>
        <h3>{students.length}</h3>
      </div>
      <div className="card-single-button">
        <Link to="/students">
          <button className="button-main btn">View students</button>
        </Link>
      </div>
    </div>
  );
}
