import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/Root";
import ErrorPage from "./ErrorPage";
import Contact, { loader as contactLoader } from "./routes/Contact";
import EditContact, { action as editAction } from "./routes/Edit";
import { action as destroyAction } from "./routes/Destroy";
import Index from "./routes/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        errorElement: <div>Oops! There was an error.</div>,
        action: destroyAction,
      },
    ],
  },
]);

/* This first route is what we often call the "root route" since the rest of our routes will render inside of it. 
It will serve as the root layout of the UI, we'll have nested layouts as we get farther along. */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
