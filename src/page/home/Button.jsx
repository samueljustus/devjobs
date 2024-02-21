import { Link } from "react-router-dom";
const Button = () => {
  return (
    <Link to="allJobs" className="font-bold py-3 px-6 rounded-lg bg-[#f15d5d] text-[#ffffff] hover:opacity-75 hover:transition ease-in-out delay-150">
      Browse jobs
    </Link>
  );
};

export default Button;
