import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Checkout from "./Pages/Checkout";
import Tables from "./Pages/Tables";
import Home from "./Pages/Home";


const routes = createBrowserRouter([
  // {
  //   path:'*',
  //   element: <NotFound />,
  // },
  {
    path: "/",
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
