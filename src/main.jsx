import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import NotFoundPage from "./NotFoundPage";
import Home from "./pages/Home";
import AuthProvider from "./firebase/AuthProvider";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import UpdateInfo from "./pages/UpdateInfo";
import AddCrafts from "./pages/AddCrafts";
import CraftDetails from "./pages/CraftDetails";
import PrivateRoute from "./firebase/PrivateRoute";
import MyItems from "./pages/MyItems";
import UpdateItem from "./pages/UpdateItem";
import AllCrafts from "./pages/AllCrafts";
import CraftByCategory from "./pages/CraftByCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://aesthetic-pottery-server.vercel.app/allcrafts"
          ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateInfo",
        element: <UpdateInfo></UpdateInfo>,
      },
      {
        path: "/addcrafts",
        element: (
          <PrivateRoute>
            <AddCrafts></AddCrafts>
          </PrivateRoute>
        ),
      },
      {
        path: "/craftDetails/:id",
        element: (
          <PrivateRoute>
            <CraftDetails></CraftDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://aesthetic-pottery-server.vercel.app/craftDetails/${params.id}`
          ),
      },
      {
        path: "/myitems/:email",
        element: (
          <PrivateRoute>
            <MyItems></MyItems>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://aesthetic-pottery-server.vercel.app/myitems/${params.email}`
          ),
      },
      {
        path: "/updateitem/:id",
        element: (
          <PrivateRoute>
            <UpdateItem></UpdateItem>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://aesthetic-pottery-server.vercel.app/craftDetails/${params.id}`
          ),
      },
      {
        path: "/allcrafts",
        element: <AllCrafts></AllCrafts>,
        loader: () =>
          fetch(
            "https://aesthetic-pottery-server.vercel.app/allcrafts"
          ),
      },
      {
        path: '/categories/:name',
        element: <CraftByCategory></CraftByCategory>,
        loader: ({params})=>fetch(`https://aesthetic-pottery-server.vercel.app/categories/${params.name}`)
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
