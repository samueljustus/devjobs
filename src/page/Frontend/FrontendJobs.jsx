
import JobListCard from '../../component/JobListCard/JobListCard';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FaHeart } from "react-icons/fa";
import { useContext } from 'react'
import { FrontendJobContext } from '../../context/FrontendJobContext'
import JobCategoriesNavigation from '../../component/JobCategoriesNavigation';
function FrontendJobs() {
   const {frontendJobData, setFrontEndJobData} = useContext(FrontendJobContext)
   console.log(frontendJobData)
   
  return (
    <JobListCard>
      <JobCategoriesNavigation />
    <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:gap-10 mt-10">
      <div className=" lg:w-[30%] lg:sticky lg:top-0">
        <h1 className="text-2xl font-bold font-helvetica text-[#1b1b1b] text-center">
          Latest Job Listings
        </h1>
        <p className="py-3 text-center text-lg text-[#b0b0b0]">
          The latest job listings we've received accross Frontend Job categories
        </p>
      </div>
      {frontendJobData ? (
        <ul className="lg:w-[60%] mt-7 lg:mt-0">
          {frontendJobData.results.map((data) => {
            return (
              <li
                key={data.id}
                className="flex flex-col gap-2 mb-8 border-b-2 border-[#f2f2f2] pb-5"
              >
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <NavLink to={`jobdetails/${data.id}`}>
                      <p className="font-base font-Arial text-[#9999b7] cursor-pointer">
                        {data.company.display_name}
                      </p>
                      <p className="text-base lg:text-xl font-helvetica font-bold text-[#1b1b1b] cursor-pointer mt-1">
                        {data.title}
                      </p>
                      </NavLink>
                    </div>
                  </div>
                  <div>
                      {/*  <FaHeart className="text-xl" /> */}
                      <FontAwesomeIcon icon={faHeart} className="text-xl" />
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="bg-[#f3f3f3] text-[#9999b7] font-thin font-Arial">
                    {data.contract_time === "full_time"
                      ? "Permanent"
                      : "Contract"}
                  </p>
                  <p className="text-[#9999b7] font-base font-Arial my-2">
                    {new Date(`${data.created}`).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                    })}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </section>
  </JobListCard>
  )
}

export default FrontendJobs
