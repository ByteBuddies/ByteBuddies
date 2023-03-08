import React from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Main from "./pages/Main.jsx";
import '../styles.scss';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "main",
    element: <Main />
  }
])

root.render(<RouterProvider router={router} />);