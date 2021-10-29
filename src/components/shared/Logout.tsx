import { useHistory } from "react-router-dom";
import { logout } from "../../scripts/authentification";
import { useAuth } from "../../states/AuthProvider";
import { useUser } from "../../states/UserProvider";

export default function Logout() {
  // Global state
  const { setUser } = useUser();
  const { setIsLogged } = useAuth();
  const history = useHistory();

  // Methods
  async function onLogout() {
    const account = await logout();

    console.log("StudentPage.jsx account", account);
    setIsLogged(false);
    setUser(null);
    history.push("/");
  }
  return (
    <button onClick={onLogout} className="button-link red">
      Logout
    </button>
  );
}
