import LuxaryShop from "./Components/Shop/LuxaryShop";
import css from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question/Question";

function App() {
  return (
    <div className="App">
      <LuxaryShop className=""></LuxaryShop>
      <Question />
    </div>
  );
}

export default App;
