import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

/* This first route is what we often call the "root route" since the rest of our routes will render inside of it. 
It will serve as the root layout of the UI, we'll have nested layouts as we get farther along. */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
