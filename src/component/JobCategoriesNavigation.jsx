
import { NavLink } from 'react-router-dom'
function JobCategoriesNavigation() {
  return (
    <>
      <ul className="flex flex-row justify-center items-center flex-wrap px-10 gap-5">
        <li className="px-4 py-3 bg-[#ffeddf] rounded-full font-semibold text-sm lg:text-base">All</li>
        <li className="px-4 py-3 bg-[#ffeddf] rounded-full font-semibold text-sm lg:text-base">Frontend Developer</li>
        <li className="px-4 py-3 bg-[#ffeddf] rounded-full font-semibold text-sm lg:text-base">Backend Developer</li>
        <li className="px-4 py-3 bg-[#ffeddf] rounded-full font-semibold text-sm lg:text-base">Fullstack Developer</li>
      </ul>
    </>
  )
}

export default JobCategoriesNavigation
