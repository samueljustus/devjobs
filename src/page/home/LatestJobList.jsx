import JobListCard from "../../component/JobListCard/JobListCard.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { JobContext } from "../../context/jobContext.jsx";
// import { FaHeart } from "react-icons/fa";

function LatestJobList() {
  const { latestJobData, setLatestJobData } = useContext(JobContext);
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
            <Link>view all jobs</Link>
          </p>
        </div>
        {latestJobData ? (
          <ul className="lg:w-[60%]">
            {latestJobData.results.map(() => {
            return ( <li className="flex flex-col gap-2 mb-8 border-b-2 border-[#f2f2f2] pb-5">
              {/* first div */}
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center gap-2">
                  <div className=" hidden md:block md:max-w-5">
                    <img
                      src="/public/img/pexels-unchalee-srirugsar-85773.jpg"
                      alt="rose"
                    />
                  </div>
                  <div>
                    <p className="font-base font-Arial text-[#9999b7] cursor-pointer">
                      Woo Network
                    </p>
                    <p className="font-base font-helvetica font-bold text-[#1b1b1b] cursor-pointer">
                      Frontend Developer
                    </p>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon icon={faHeart} className="text-xl" />
                  {/* <FaHeart /> */}
                </div>
              </div>
              {/* second div */}
              <div className="flex flex-row justify-between items-center">
                <p className="bg-[#f3f3f3] py-1 px-2 md:mx-7 text-[#9999b7] font-thin font-Arial">
                  Permanent
                </p>
                <p className="text-[#9999b7] font-base font-Arial my-2">
                  30 jun
                </p>
              </div>
            </li>
            )
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
