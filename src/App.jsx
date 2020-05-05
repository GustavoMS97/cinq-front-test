import React from "react";

import AppRouter from "./routers";
import GlobalStyle from "./styles/global.css";

function App() {
  return (
    <div>
      <GlobalStyle />
      <AppRouter />
    </div>
  );
}

export default App;
