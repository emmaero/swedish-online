import iUser from "../../interfaces/iUser";
import { deleteDocument } from "../../scripts/firestore";
interface iProp {
  item: iUser;
}
export default function StudentItem({ item }: iProp) {
  const { id, name, city } = item;
  const path = "users";
  async function onDelete(id: any): Promise<void> {
    var choice = window.confirm("Do you want to kick out this student?");
    if (choice === true) {
      await deleteDocument(path, id);
      alert("Student has been kicked out");
    }
  }
  return (
    <div className="card-secondary">
      <div className="top">
        <h3>{name.toUpperCase()}</h3>
      </div>
      <div className="card-body">
        <p>
          <span>City: </span>
          {city}
        </p>
      </div>
      <div className="card-buttons">
        <button onClick={() => onDelete(id)} className="btn button-secondary">
          Delete
        </button>
      </div>
    </div>
  );
}
