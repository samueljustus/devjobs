import { PulseLoader } from "react-spinners";
function LoadingScreen() {
  return (
    <div className="">
      <PulseLoader loading={true} size={20} color="#f15d5d" />
    </div>
  );
}

export default LoadingScreen;
