import React from "react";

import { Outlet } from "react-router-dom";

import ErrorBoundryMain from "./module/ErrorBoundry/ErrorBoundryMain";
function App() {
  return (
    <div className="w-full">
      <ErrorBoundryMain />
      <Outlet />
    </div>
  );
}

export default App;
