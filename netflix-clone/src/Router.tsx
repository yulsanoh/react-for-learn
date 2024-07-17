import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
