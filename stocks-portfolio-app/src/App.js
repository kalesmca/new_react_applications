import "./App.css";
import LayoutComponent from "./components/layout";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="">
      <Router>
        <Provider store={store}>
          <LayoutComponent />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
