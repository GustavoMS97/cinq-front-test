import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppRouter from "./routers";
import GlobalStyle from "./styles/global.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div id="app-root">
      <Provider store={store}>
        <GlobalStyle />
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
