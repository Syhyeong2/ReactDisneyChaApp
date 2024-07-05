import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Characters from "./components/characters";
import Detail from "./pages/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Characters />,
      },
    ],
  },
  {
    path: "/character/:id",
    element: <Detail />,
  },
]);

export default router;
