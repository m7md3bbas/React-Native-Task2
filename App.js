import { Provider } from "react-redux";
import Router from "./src/router/mainRouter";
import store from "./src/app/store";


export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}