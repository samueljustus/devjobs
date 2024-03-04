import { useFormContext } from "react-hook-form";
function Preview() {
  const { watch } = useFormContext();

  const jobTitle = watch("jobtitle", "Job Title");

  console.log(jobTitle);
  return (
    <section className="h-screen font-Arial p-3 w-[60%]">
      <p className="italic text-lg font-semibold">Preview:</p>
      <p className="text-sm">Complete the form on the left to watch your listing come to life</p>
      <div className="mt-20 flex flex-row justify-between items-center">
        <div className ="flex flex-col item-center justify-start gap-2">
          <h1 className="text-5xl">Job Title</h1>
          <div className="flex flex-row gap-10 items-center">
            <p className="italic text-sm ">job type</p>
            <p className="italic text-sm ">fully remote</p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="flex flex-row justify-between items-center">
            <div>
              <div className="w-14 h-14 bg-red-500">image</div>
            </div>
            <p>company name</p>
          </div>
          <p className="m-2 text-sm">about your company</p>
          <p className="m-2 text-lg">how should people apply</p>
        </div>
      </div>
      <div>
        {}
      </div>
      <div className="mt-20">
        <p className="text-lg text-[] mb-10">About your role....</p>
        <div className="mb-10">
          {/* unchanged */}
          <h2 className="text-3xl font-semibold">Experience</h2>
          {/* unchanged */}
          <p className="mt-6">required skills and experience...</p>
        </div>
        <div className="">
          {/* unchanged */}
          <h2 className="text-3xl font-semibold">Salary and Perks</h2>
          {/* unchanged */}
          <p className="mt-6">salary and perks</p>
        </div>
      </div>
    </section>
  );
}

export default Preview;
