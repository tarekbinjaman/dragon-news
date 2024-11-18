import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './Layout/Home.jsx';
import CategoryNews from './Pages/CategoryNews.jsx';
import AuthLayout from './Layout/AuthLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id", 
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) => 
          fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <h2 className='text-center'>Page not found</h2>
  },
  {
    path: "/news",
    element: <h1>News layout</h1>,
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <h2>Register</h2>,
      },
      {
        path: "/auth/register",
        element: <h2>Register</h2>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
