import { Route, Routes } from "react-router-dom";
import MainPage from "./main_page/MainPage";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={MainPage} />
      </Routes>
  );
}

export default App;
