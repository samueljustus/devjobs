import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation()
  const hideFooterForPath = ['/postjob']
  if (hideFooterForPath.includes(location.pathname)) {
    return <></>
  }
  return (
    <footer className="bg-[#1b1b1b] py-3 px-5 font-Arial">
      <p className="text-[#fffff1] my-5 text-lg">
        devJobs is the easiest way to find high quality tech jobs 100% of our
        jobs are hand-picked,manually reviewed and expertly curated
      </p>
      <p className="text-[#fffff1] text-lg">
        <span className="font-bold">Hiring remotely?</span>reach remote workers in just one click{" "}
        <span className="font-bold">post a job today!</span>
      </p>
      <div>
        <div>
          <h2 className="text-[#fffff1] italic">Browse Jobs</h2>
        
        </div>
        <div>
          <h2 className="text-[#fffff1] italic">Company</h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
