import JobListCard from "../../component/JobListCard/JobListCard.jsx";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { JobContext } from "../../context/jobContext.jsx";
import { FcGlobe } from "react-icons/fc";
import { TbMoneybag } from "react-icons/tb";
import moment from "moment";

function LatestJobList() {
  const { latestJobData, setLatestJobData } = useContext(JobContext);
  const [hover, setHover] = useState(null);

  const mouseEnter = (i) => {
    setHover(i);
  };

  const mouseLeave = (i) => {
    setHover(i);
  };
  return (
    <JobListCard>
      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:gap-10">
        <div className=" lg:w-[30%]">
          <h1 className="text-2xl font-bold font-helvetica text-[#1b1b1b] text-center">
            Latest Job Listings
          </h1>
          <p className="py-3 text-center text-lg text-[#b0b0b0]">
            The latest job listings we've received accross all categories
          </p>
          <p className="text-center text-[#0057ff] font-medium">
            <NavLink to="allJobs">view all jobs</NavLink>
          </p>
        </div>
        {latestJobData ? (
          <ul className="lg:w-[60%] mt-7 lg:mt-0">
            {latestJobData.results.map((data, i) => {
              return (
                <li
                  key={data.id}
                  className="flex flex-col gap-2 mb-8 border-b-2 border-[#f2f2f2] pb-5"
                  onMouseEnter={() => mouseEnter(i)}
                  onMouseLeave={() => mouseLeave(i)}
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
                    {hover === i ? (
                      <button className=" mt-5 font-bold py-3 px-10 rounded-lg bg-[#f15d5d] text-[#ffffff] hover:opacity-75 hover:transition ease-in-out delay-150">
                        Apply
                      </button>
                    ) : null}
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                      <p className="bg-[#f3f3f3] text-[#9999b7] font-thin font-Arial">
                        {data.contract_time === "full_time"
                          ? "Permanent"
                          : "Contract"}
                      </p>
                      <p className="bg-[#f3f3f3] text-[#9999b7] font-thin font-Arial hidden md:flex md:flex-row items-center">
                        <span>
                          <FcGlobe />
                        </span>
                        {data.location.area[0]}
                      </p>
                      <p className="bg-[#f3f3f3] text-[#9999b7] font-thin font-Arial flex flex-row items-center">
                        <span>
                          <TbMoneybag className="fill-[#fec93e]" />
                        </span>
                        <span>$</span>
                        {Math.floor(data.salary_min).toLocaleString()}
                      </p>
                    </div>
                    <div className="text-[#9999b7] font-base font-Arial my-2">
                      {`${moment(data.created, "YYYYMMDD").fromNow(true)}`}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : null}
      </section>
    </JobListCard>
  );
}

export default LatestJobList;

// apikey 0decc13310e5a58e6e180a682d690540
// app id 87e58175
