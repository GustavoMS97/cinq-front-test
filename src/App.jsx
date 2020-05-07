import React from "react";

import AppRouter from "./routers";
import GlobalStyle from "./styles/global.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div id="app-root">
      <GlobalStyle />
      <AppRouter />
    </div>
  );
}

export default App;
