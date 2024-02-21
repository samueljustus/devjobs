import { IoTriangle } from "react-icons/io5";
import JobCategoriesNavigation from "./JobCategoriesNavigation";
const JobCategories = () => {
  return (
    <div className=" w-screen flex flex-col justify-center items-center py-10">
      <IoTriangle className="text-[#f15d5d]" />
      <h2 className="text-2xl font-semibold mb-8 mt-3">Popular Job Categories</h2>
      <JobCategoriesNavigation />
    </div>
  );
};

export default JobCategories;
