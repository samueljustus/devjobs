import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import JobContextProvider from "./context/jobContext.jsx";
import BrowseJobs from './page/BrowseJob/BrowseJobs.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Layout from './component/Layout.jsx'
import Home from './page/home/Home.jsx'
import HomeJobDetails from "./page/JobDetails/HomeJobDetails.jsx";
import FrontendJobContextProvider from "./context/FrontendJobContext.jsx";
import Frontend from "./page/Frontend/Frontend.jsx";
import BackendJobs from "./page/Backend/BackendJobs.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='allJobs' element={<BrowseJobs />} />
      <Route path='jobdetails/:jobDetailsId' element={<HomeJobDetails />} />
      <Route path='frontend' element={<Frontend />} />
      <Route path='backend' element={<BackendJobs />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FrontendJobContextProvider>
    <JobContextProvider>
    <RouterProvider router={router} />
    </JobContextProvider>
    </FrontendJobContextProvider>
  </React.StrictMode>
);
