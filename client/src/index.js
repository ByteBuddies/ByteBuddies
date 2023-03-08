import React from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import '../styles.scss';
import App from "./components/App.jsx";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <App />
);