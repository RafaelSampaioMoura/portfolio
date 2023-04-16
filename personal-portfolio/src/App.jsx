import { Route, Switch } from "react-router-dom";
import MainPage from "./main_page/MainPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
}

export default App;
