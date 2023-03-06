import React from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Login from "./pages/Login.js";
import Main from "./pages/Main.js";

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