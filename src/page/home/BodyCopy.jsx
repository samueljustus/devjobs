import Button from "./Button.jsx";

const BodyCopy = () => {
  return (
    <main className="px-6 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl text-[#1b1b1b] font-bold text-helvetica text-center lg:text-4xl">Work remotely from your home or places around the world</h1>
      <p className="text-base text-[#ccb7b0] text-center m-3 lg:text-">
        Discover fully or partially remote job opportunities for those looking
        to start their developer career.{" "}
      </p>
      <Button />
    </main>
  );
};

export default BodyCopy;
