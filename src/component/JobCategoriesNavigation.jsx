
import { NavLink, Link } from 'react-router-dom'
function JobCategoriesNavigation() {
  return (
    <>
      <ul className="flex flex-row justify-center items-center flex-wrap px-10 gap-5">
        <li className="px-4 py-3 bg-[#ffeddf] rounded-full font-semibold text-sm lg:text-base">All</li>
        <Link to="frontend"><li className="px-4 py-3 bg-[#ffeddf] rounded-full font-semibold text-sm lg:text-base">Frontend Developer</li></Link>
        <NavLink to="backend"><li className="px-4 py-3 bg-[#ffeddf] rounded-full font-semibold text-sm lg:text-base">Backend Developer</li></NavLink>
        <NavLink to="fullstack"><li className="px-4 py-3 bg-[#ffeddf] rounded-full font-semibold text-sm lg:text-base">Fullstack Developer</li></NavLink>
      </ul>
    </>
  )
}

export default JobCategoriesNavigation
