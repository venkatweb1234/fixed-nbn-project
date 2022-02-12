import "./App.css";
import FixedRoutes from "./components/fixedroutes";
import Header from "./components/header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <div className="container" data-testid='containerfluid'>
      <Provider store={store}>
      <Header />
      <FixedRoutes />
      </Provider>
    </div>
  );
}

export default App;
