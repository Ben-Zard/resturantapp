import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Checkout from "./Pages/Checkout";

import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Restaurant from "./Pages/Restaurant";
import Menu from "./Components/Menu";


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
    path:"/menu",
    element: <Menu/>,
  },
  {
     path: "/checkout",
     element: <Checkout/>,
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
