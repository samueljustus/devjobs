import { IoTriangle } from "react-icons/io5";

const JobCategories = () => {
  return (
    <div className=" w-screen flex flex-col justify-center items-center py-10">
      <IoTriangle className="text-[#f15d5d]" />
      <h2 className="text-2xl font-semibold mb-8 mt-3">Popular Job Categories</h2>
      <div className="flex flex-row justify-center items-center flex-wrap px-10 gap-5">
        <p className="px-4 py-3 bg-[#ffeddf] rounded-full font-semibold">All</p>
        <p className="px-4 py-3 bg-[#ffeddf] rounded-full font-semibold">Frontend Developer</p>
        <p className="px-4 py-3 bg-[#ffeddf] rounded-full font-semibold">Backend Developer</p>
        <p className="px-4 py-3 bg-[#ffeddf] rounded-full font-semibold">Fullstack Developer</p>
      </div>
    </div>
  );
};

export default JobCategories;
