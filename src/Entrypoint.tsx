import LocalRoutes from "@application/routing/LocalRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "@view/compositions/Header";
import headerProps from "@domain/configuration/headerProps";

function App() {
  return (
    <div className="App">
      <Router>
        <Header {...headerProps()} />
        <LocalRoutes />
      </Router>
    </div>
  );
}

export default App;
