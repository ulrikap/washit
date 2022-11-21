import LocalRoutes from "@application/routing/LocalRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@application/state/store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <LocalRoutes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
