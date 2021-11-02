import { BrowserRouter, Switch } from "react-router-dom";
//Project files
import Logged from "../../routes/Logged";
import Unlogged from "../../routes/Unlogged";

interface iProp {
  isLogged: boolean;
}
export default function Browser({ isLogged }: iProp) {
  return (
    <BrowserRouter>
      <Switch>
        {isLogged ? <Logged /> : <Unlogged />}
        {/* No comments in production -1 */}
        {/* <Route component={Landing} exact path="/landing" /> */}
      </Switch>
    </BrowserRouter>
  );
}
