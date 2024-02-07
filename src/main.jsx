import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import JobContextProvider from "./context/jobContext.jsx";

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Layout from './component/Layout.jsx'
import Home from './page/home/Home.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JobContextProvider>
    <RouterProvider router={router} />
    </JobContextProvider>
  </React.StrictMode>
);
