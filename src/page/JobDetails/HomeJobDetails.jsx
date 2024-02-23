import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { JobContext } from "../../context/jobContext";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import moment from "moment";
function HomeJobDetails() {
  const { jobDetailsId } = useParams();
  console.log(jobDetailsId);
  const { latestJobData, setLatestJob } = useContext(JobContext);
  const job = latestJobData.results.find((job) => job.id === jobDetailsId);
  console.log(job);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  
  const handleJobApplication = (url) => {
    return () => openInNewTab(url)
  } 

  if (!job) {
    return <p>{`so sorry an error occur our dev has been notified`}</p>; // incase of an error
  }

  return (
    <div>
      {job && (
        <div className="p-5 font-helvetica">
          <div className="text-2xl mb-2">{job.title}</div>
          <div className="flex flex-row items-center gap-1">
            <div className="flex flex-row items-center gap-1">
              <FaLocationDot className="text-base" />
              <p className="text-lg font-bold">Location:</p>
            </div>
            <div className="text-lg">{job.location.area[0]}</div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="flex flex-row items-center gap-1">
              <FaMoneyCheck className="text-base" />
              <p className="text-lg font-bold">Salary:</p>
            </div>
            <div className="">
              <span>$</span>
              {Math.floor(job.salary_min).toLocaleString()}
              <span className="text-lg"> Anually</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="flex flex-row items-center gap-1">
              <SlCalender className="text-base" />
              <p className="text-lg font-bold">Posted:</p>
            </div>
            <div className="text-lg">
              {`${moment(job.created, "YYYYMMDD").fromNow()}`}
            </div>
          </div>
          <div className="my-2 ">
            <h2 className="text-2xl font-Arial">Job Description</h2>
            <p className="text-lg text-[#242424]">{job.description}</p>
          </div>
          <button 
            onClick={handleJobApplication(`${job.redirect_url}`)}
            className=" mt-5 font-bold py-3 px-10 rounded-lg bg-[#f15d5d] text-[#ffffff] hover:opacity-75 hover:transition ease-in-out delay-150"
          >
            Quick Apply
          </button>
        </div>
      )}
    </div>
  );
}

export default HomeJobDetails;
