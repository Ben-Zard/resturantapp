import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Checkout from "./Pages/Checkout";

import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Table from "./Pages/Table";
import { UserProvider } from "./Components/auth/UserContext";


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
    element: <Table />,
  },
  {
     path: "/table/:id",

  },
  {
     path: "/order",
     element: <Checkout/>,
  },
]);
//  #TODO: Add resurvation hsitoy with checkout 
// #TODO: clean up styling 
// #TODO: finish home page


const App = () => {

  return (
    <>
     <UserProvider>
      <RouterProvider router={routes} />
      </UserProvider>
    </>
  );
}

export default App;
