import { createBrowserRouter } from "react-router-dom";

import { NotFound } from "./404";
import { App } from "./app";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
]);
