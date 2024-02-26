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
import Backend from './page/Backend/Backend.jsx'
import BackendJobContextProvider from "./context/BackendJobContext.jsx";
import FullstackJobContextProvider from './context/FullstackJobContext.jsx'
import Fullstack from './page/Fullstack/Fullstack.jsx'
import About from "./page/About/About.jsx";
import PostJob from "./page/PostJob/PostJob.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='allJobs' element={<BrowseJobs />} />
      <Route path='jobdetails/:jobDetailsId' element={<HomeJobDetails />} />
      <Route path='frontend' element={<Frontend />} />
      <Route path='backend' element={<Backend />} />
      <Route path='fullstack' element={<Fullstack />} />
      <Route path='postjob' element={<PostJob />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FullstackJobContextProvider>
    <BackendJobContextProvider>
    <FrontendJobContextProvider>
    <JobContextProvider>
    <RouterProvider router={router} />
    </JobContextProvider>
    </FrontendJobContextProvider>
    </BackendJobContextProvider>
    </FullstackJobContextProvider>
  </React.StrictMode>
);
