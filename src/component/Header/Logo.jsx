import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center justify-center">
      <img src="/public/vite.svg" alt="company logo" />
      <h1 className="text-2xl font-helvetica font-medium">devJobs</h1>
    </Link>
  );
};

export default Logo;
