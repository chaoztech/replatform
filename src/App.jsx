import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";

import "./App.scss";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
    {
      basename: "/replatform"
    }
  );

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
