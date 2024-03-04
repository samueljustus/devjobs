import { useFormContext } from "react-hook-form";
function Preview() {
  const { watch } = useFormContext();

  const jobTitle = watch("jobtitle", "Job Title");
  const jobType = watch("permanent-contract");
  const workStyle = watch("workStyle");
  const companyName = watch("company_name", "Company name");
  const aboutCompany = watch(
    "about_company",
    "The first line of your company description will appear here"
  );
  const howToApply = watch("how_to_apply");
  const aboutRole = watch("about_role", "About role...");
  const experience = watch("experience", "required skills and experience...");
  const salary = watch("salary");
  const logo = watch("logo")
  console.log(watch());

  console.log(logo);
  return (
    <section className=" hidden md:block h-screen font-Arial p-7 w-[60%] overflow-y-scroll">
      <p className="italic text-lg font-semibold">Preview:</p>
      <p className="text-sm">
        Complete the form on the left to watch your listing come to life
      </p>
      <div className="mt-20 flex flex-row justify-between items-center">
        <div className="flex flex-col item-center justify-start gap-2">
          <h1 className="text-5xl">{jobTitle}</h1>
          <div className="flex flex-row gap-10 items-center">
            <p className="italic text-sm ">
              {jobType === "permanent" ? "Permanent" : "contract"}
            </p>
            <p className="italic text-sm ">
              {workStyle === "fully" ? "fully remote" : "partially"}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="flex flex-row gap-2 items-center">
            <div>
              <div className="w-14 h-14 bg-[#f4f6f7]">
                <img src="" alt="" />
              </div>
            </div>
            <p>{companyName}</p>
          </div>
          <div className="">
            <p className="m-3 text-sm w-40">{aboutCompany}</p>
            <p className="m-3 text-sm">{howToApply}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f6f7] my-10 py-10 w-[45%]">
        {workStyle === "fully" ? (
          <p className="text-sm italic text-center">
            open to applicant globally!
          </p>
        ) : (
          <p className="text-sm italic text-center">
            <span className="font-semibold">Partially remote:</span>Applicants
            must be within a commutable distance of Job Location
          </p>
        )}
      </div>
      <div className="mt-20">
        <p className="text-lg text-[#242424] mb-10">{aboutRole}</p>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold">Experience</h2>
          <p className="mt-6">{experience}</p>
        </div>
        <div className="">
          <h2 className="text-3xl font-semibold">Salary and Perks</h2>
          <p className="mt-6">{salary}</p>
        </div>
      </div>
    </section>
  );
}

export default Preview;
