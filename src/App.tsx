import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Checkout from "./Pages/Checkout";
import Tables from "./Pages/Resturant";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";


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
    path: "Table",
    element: <Tables />,
  },
  {
     path: "Tables/:id",
    // element: <ServiceSingle />,
  },
  {
     path: "Checkout",
    // element: <ServiceSingle />,
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
