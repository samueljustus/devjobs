function About() {
  return (
    <div className="flex flex-col items-center justify-center font-Arial">
      <div className="relative">
        <img
          className="w-screen h-100 max-w-[100%]"
          src="https://img.freepik.com/premium-vector/abandon-beach-house-island_1639-25638.jpg?w=740"
          alt="an image of a house close to the beach"
        />
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <p className="bg-[#1b1b1b] text-[#ffffff] text-sm w-[100%] text-center p-5">
            DO WHAT YOU LOVE DAILY FROM ANYWHERE
          </p>
        </div>
      </div>
      <div className="-mt-20 z-7 m-5 w-[90%] lg:w-[50%]">
        <p className="bg-[#ffffff] p-5 text-center text-xl text-[#000000] z-15 shadow-sm rounded-md">
          Our mission is to help you find a developer job and enable you do it
          daily from anywhere.{" "}
        </p>
        <h1 className="font-bold text-xl mt-20">why we exist</h1>
        <p className="mt-5">
          Communication tools are better than ever with email, chat and video
          calls allowing for instant communication with anyone around the globe
          at the click of a button or the push of the enter key.
        </p>
        <p className="mt-5">
          Simply put there is no better time in history to have a distributed
          workforce or be a remote worker than at this very moment and with
          every day that passes things are only getting better..
        </p>
        <p className="mt-5">We want to help everyone find a job that they love and allow them to do it from anywhere.</p>
      </div>
    </div>
  );
}

export default About;
