import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import NotFoundPage from './NotFoundPage';
import Home from './pages/Home';
import AuthProvider from './firebase/AuthProvider';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import UpdateInfo from './pages/UpdateInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element:<LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/updateInfo',
        element: <UpdateInfo></UpdateInfo>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
