import { IoTriangle } from "react-icons/io5";
import JobCategoriesNavigation from "./JobCategoriesNavigation";
import { useLocation } from "react-router-dom";

const JobCategories = () => {
const location = useLocation()
const hideJobCategoriesforPath = ['/postjob', '/list-your-remote-role', '/about']

if (hideJobCategoriesforPath.includes(location.pathname)) {
  return <></>
}
  return (
    <div className=" w-screen flex flex-col justify-center items-center py-10">
      <IoTriangle className="text-[#f15d5d]" />
      <h2 className="text-2xl font-semibold mb-8 mt-3">Popular Job Categories</h2>
      <JobCategoriesNavigation />
    </div>
  );
};

export default JobCategories;
