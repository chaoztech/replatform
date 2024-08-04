import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Home from "./pages/Home/Home";

import "./App.scss";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
    ],
    {
      basename: "/replatform"
    }
  );

  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
