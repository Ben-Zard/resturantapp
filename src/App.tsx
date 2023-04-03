import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Checkout from "./Pages/Checkout";

import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Restaurant from "./Pages/Restaurant";


const routes = createBrowserRouter([
  // {
  //   path:'*',
  //   element: <NotFound />,
  // },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/table",
  },
  {
     path: "/tables/:id",

  },
  {
    path:"/restaurant",
    element: <Restaurant/>,
  },
  {
     path: "/checkout",

  },
]);


const App = () => {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
