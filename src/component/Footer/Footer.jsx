import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
function Footer() {
  const location = useLocation();
  const hideFooterForPath = ["/postjob"];
  if (hideFooterForPath.includes(location.pathname)) {
    return <></>;
  }
  return (
    <footer className="bg-[#1b1b1b] py-3 px-5 font-Arial">
      <p className="text-[#fffff1] my-5 text-lg">
        devJobs is the easiest way to find high quality tech jobs 100% of our
        jobs are hand-picked,manually reviewed and expertly curated
      </p>
      <p className="text-[#fffff1] text-lg">
        <span className="font-bold">Hiring remotely?</span>reach remote workers
        in just one click{" "}
        <Link to="/postjob">
          <span className="font-bold">post a job today!</span>
        </Link>
      </p>
      <div className="flex flex-row gap-10 items-center mt-6">
        <div>
          <Link to="/allJobs">
            <p className="text-[#fffff1] italic">Browse Jobs</p>
          </Link>
          <Link to="/frontend">
            <p className="text-[#fffff1] italic">Frontend Jobs</p>
          </Link>
          <Link to="/backend">
            <p className="text-[#fffff1] italic">Backend Jobs</p>
          </Link>
          <Link to="/fullstack">
            <p className="text-[#fffff1] italic">Fullstack Jobs</p>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <p className="text-[#fffff1] italic">About</p>
          </Link>
          <Link to="/list-your-remote-role">
            <p className="text-[#fffff1] italic">why list jobs with us?</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center border-t border-[#ffff] mt-10 w-[90%] m-auto">
        <div className="flex flex-row items-center gap-10 mt-5">
          <FaInstagram className="text-[#ffff] text-lg" />
          <BsTwitterX className="text-[#ffff] text-lg" />
          <FaLinkedin className="text-[#ffff] text-lg" />
          <IoMdMail className="text-[#ffff] text-lg" />
        </div>
        <p className="text-sm mt-5 text-[#ffff]">
          COPYRIGHT © SUPBRNDS LTD 2023
        </p>
      </div>
    </footer>
  );
}

export default Footer;
