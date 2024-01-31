import JobListCard from "../../component/JobListCard/JobListCard.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { FaHeart } from "react-icons/fa";
function LatestJobList() {
  return (
    <JobListCard>
      <section className="flex flex-col items-center">
        <div className="py-5">
          <h1 className="text-2xl font-bold font-helvetica text-[#1b1b1b] text-center">
            Latest Job Listings
          </h1>
          <p className="py-3 text-center text-lg text-[#b0b0b0]">
            The latest job listings we've received accross all categories
          </p>
          <p className="text-center text-[#0057ff] font-normal">
            <Link>view all jobs</Link>
          </p>
        </div>
        <ul>
          <li>
            {/* first div */}
            <div>
              <div>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                <p>woo network</p>
                <p>front end developer</p>
                </div>
              </div>
              <div>
              <FontAwesomeIcon icon={faHeart} />
              {/* <FaHeart /> */}
              </div>
            </div>
            {/* second div */}
            <div>
              <p></p>
              <p></p>
            </div>
          </li>
        </ul>
      </section>
    </JobListCard>
  );
}

export default LatestJobList;
