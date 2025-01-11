import App from "@/App";
import Tasks from "@/pages/tasks";
// import Users from "@/pages/users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "users",
        // element: <Users />,
      },
      {
        index: true,
        element: <Tasks />,
      },
    ],
  },
]);

export default routes;
