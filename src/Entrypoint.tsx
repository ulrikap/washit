import LocalRoutes from "@application/routing/LocalRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "@view/compositions/Header";
import useHeader from "@domain/hooks/useHeader";

function App() {
  return (
    <div className="App">
      <Router>
        <Header {...useHeader()} />
        <LocalRoutes />
      </Router>
    </div>
  );
}

export default App;
