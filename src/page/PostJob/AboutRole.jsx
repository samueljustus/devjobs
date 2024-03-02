import React from "react";
import Select from "react-select";
import { techStack } from "../../Data/DropDownSelect";
import makeAnimated from "react-select/animated";
import { tools } from "../../Data/DropDownSelect";
import { useFormContext } from "react-hook-form";
function AboutRole() {   
      const animatedComponent = makeAnimated();
      const {
        register,
        formState: {errors},
      } = useFormContext();
      
  return (
    <section>
      <h2 className="bg-[#f15d5d] text-[#ffffff] uppercase text-xs italic w-52 px-3 py-1">
        2. Tell us about the role
      </h2>
      <div className="mx-3">
        <label htmlFor="jobtitle" className="block uppercase text-sm mt-5 mb-2">
          Job title*
        </label>
        <input
          type="text"
          id="jobtitle"
          name="jobtitle"
          className={`${
            errors.jobtitle
              ? "border border-red-500"
              : "border-2 border-[#dddddd]"
          } w-[100%] h-20 outline-none px-3 text-sm`}
          {...register("jobtitle", {
            required: "please provide a job title",
          })}
        />
        {errors.jobtitle && (
          <small className="text-sm text-red-500">
            {errors.jobtitle.message}
          </small>
        )}
        <div className="mb-7">
          <p className="text-sm uppercase mt-4 mb-3">job type*</p>
          <input
            type="radio"
            id="permanent"
            name="permanent-contract"
            className="hidden peer/permanent"
            {...register("permanent-contract", {
              required: "please select a job type",
            })}
          />
          <label
            htmlFor="permanent"
            className="px-2 py-1 border border-[#f2f2f2] text-[#1b1b1b] peer-checked/permanent:bg-[#1b1b1b] peer-checked/permanent:text-[#ffff]"
          >
            Permanent
          </label>
          <input
            type="radio"
            id="contract"
            name="permanent-contract"
            className="hidden peer/contract"
            {...register("permanent-contract")}
          />
          <label
            htmlFor="contract"
            className="px-2 py-1 border border-[#f2f2f2] text-[#1b1b1b] peer-checked/contract:bg-[#1b1b1b] peer-checked/contract:text-[#ffffff]"
          >
            contract
          </label>
          {errors["permanent-contract"] && (
            <small className="text-sm text-red-500 block mt-3">
              {errors["permanent-contract"].message}
            </small>
          )}
        </div>
        <div>
          <p className="text-sm uppercase mt-4 mb-3">
            fully or partially remote*
          </p>
          <input
            type="radio"
            id="fully"
            value="fully"
            checked={true}
            className="hidden peer/fully"
            {...register("workStyle")}
          />
          <label
            htmlFor="fully"
            className="px-2 py-1 border border-[#f2f2f2] text-[#1b1b1b] peer-checked/fully:bg-[#1b1b1b] peer-checked/fully:text-[#ffffff]"
          >
            Fully Remote
          </label>
          <input
            type="radio"
            id="partially"
            value="partially"
            className="hidden peer/partially"
            {...register("workStyle")}
          />
          <label
            htmlFor="partially"
            className="px-2 py-1 border border-[#f2f2f2] text-[#1b1b1b] peer-checked/partially:bg-[#1b1b1b] peer-checked/partially:text-[#ffffff]"
          >
            Partially Remote
          </label>
          <div className="hidden peer-checked/partially:block mt-7">
            <label htmlFor="remotedays" className="text-sm uppercase mt-4 mb-3">
              How many days will be remote
            </label>
            <select
              name="remote-days"
              id="remotedays"
              className="border-2 border-[#dddddd] w-[100%] h-14 outline-none px-3 text-base font-normal"
            >
              <option value="two">2 days</option>
              <option value="three">3 days</option>
              <option value="four">4 days</option>
            </select>
          </div>
        </div>
        <div className="my-7">
          <p className="mb-3">Technology stack</p>
          <Select
            options={techStack}
            components={animatedComponent}
            isMulti
            placeholder="select..."
            closeMenuOnSelect={false}
          />
        </div>
        <div className="mt-7">
          <label
            htmlFor="about-role"
            className=" block text-sm uppercase mt-4 mb-3"
          >
            About the role*
          </label>
          <input
            type="text"
            id="about-role"
            name="about_role"
            className={`${
              errors.about_role
                ? "border border-red-500"
                : "border border-[#dddddd]"
            } w-[100%] h-20 outline-none px-3 text-sm`}
            {...register("about_role", {
              required: "please provide information about the role",
            })}
          />
          {errors.about_role && (
            <small className="text-sm text-red-500 block mt-2">
              {errors.about_role.message}
            </small>
          )}
        </div>
        <div className="mt-7">
          <label
            htmlFor="experience"
            className=" block text-sm uppercase mt-4 mb-3"
          >
            experience*
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            className={`${
              errors.experience
                ? "border border-red-500"
                : "border-2 border-[#dddddd]"
            } w-[100%] h-20 outline-none px-3 text-sm`}
            {...register("experience", {
              required:
                "please provide some information about who you are looking for",
            })}
          />
          {errors.experience && (
            <small className="text-sm text-red-500 block mt-2">
              {errors.experience.message}
            </small>
          )}
        </div>
        <div className="mt-7">
          <label
            htmlFor="salary"
            className=" block text-sm uppercase mt-4 mb-3"
          >
            salary & perks*
          </label>
          <input
            type="text"
            id="salary"
            name="salary"
            className={`${
              errors.salary
                ? "border border-red-500"
                : "border-2 border-[#dddddd]"
            } w-[100%] h-20 outline-none px-3 text-sm`}
            {...register("salary", {
              required: "please provide some information about what you offer",
            })}
          />
          {errors.salary && (
            <small className="text-sm text-red-500 block mt-2">
              {errors.salary.message}
            </small>
          )}
        </div>
        <div className="mt-7">
          <label
            htmlFor="how-to-apply"
            className=" block text-sm uppercase mt-4 mb-3"
          >
            how should people apply*
          </label>
          <input
            type="text"
            id="how-to-apply"
            name="how_to_apply"
            className={`${
              errors.how_to_apply
                ? "border border-red-500"
                : "border-2 border-[#dddddd]"
            } w-[100%] h-20 outline-none px-3 text-sm`}
            {...register("how_to_apply", {
              required:
                "please provide some information about how to apply for this position",
            })}
          />
          {errors.how_to_apply && (
            <small className="text-sm text-red-500 block mt-2">
              {errors.how_to_apply.message}
            </small>
          )}
        </div>
        <div className="my-7">
          <p className="text-sm uppercase mt-4 mb-3">team tools</p>
          <Select
            options={tools}
            isMulti
            components={animatedComponent}
            placeholder="select..."
            closeMenuOnSelect={false}
          />
        </div>
        <div className="mb-7">
          <p className="text-sm uppercase mt-4 mb-3">
            resident of a specific country requirements*
          </p>
          <input
            type="radio"
            id="specific-country-required"
            name="specification"
            value="Yes"
            className="hidden peer/yes"
            {...register("residency")}
          />
          <label
            htmlFor="specific-country-required"
            className="px-2 py-1 border border-[#f2f2f2] text-[#1b1b1b] peer-checked/yes:bg-[#1b1b1b] peer-checked/yes:text-[#ffff]"
          >
            Yes
          </label>
          <input
            type="radio"
            id="specific-country-not-required"
            checked={true}
            name="specification"
            value="No"
            className="hidden peer/no"
            {...register("residency")}
          />
          <label
            htmlFor="specific-country-not-required"
            className="px-2 py-1 border border-[#f2f2f2] text-[#1b1b1b] peer-checked/no:bg-[#1b1b1b] peer-checked/no:text-[#ffffff]"
          >
            No
          </label>
          <div className="mb-7 mt-7 hidden peer-checked/no:block">
            <p className="text-sm uppercase mt-4 mb-3">
              minimum working hour overlap requirements*
            </p>
            <input
              type="radio"
              id="working-hour-required"
              name="working-hours"
              value="Yes"
              className="hidden peer/yes"
              {...register("workingHours")}
            />
            <label
              htmlFor="working-hour-required"
              className="px-2 py-1 border border-[#f2f2f2] text-[#1b1b1b] peer-checked/yes:bg-[#1b1b1b] peer-checked/yes:text-[#ffff]"
            >
              Yes
            </label>
            <input
              type="radio"
              id="working-hours-not-required"
              name="working-hours"
              checked={true}
              value="No"
              className="hidden peer/no"
              {...register("workingHours")}
            />
            <label
              htmlFor="working-hours-not-required"
              className="px-2 py-1 border border-[#f2f2f2] text-[#1b1b1b] peer-checked/no:bg-[#1b1b1b] peer-checked/no:text-[#ffffff]"
            >
              No
            </label>
          </div>
          <div>
            <label
              htmlFor="job_location"
              className=" block text-sm uppercase mt-4 mb-3"
            >
              Job location*
            </label>
            <input
              type="text"
              id="job_location"
              className={`${
                errors.job_location
                  ? "border border-red-500"
                  : "border-2 border-[#dddddd]"
              } w-[100%] h-14 outline-none px-3 text-sm`}
              placeholder="Search Cities..."
              {...register("job_location", {
                required:
                  "please provide a location for this job. Ensure you select a location from the dropdown",
              })}
            />
            {errors.job_location && (
              <small className="text-sm text-red-500 block mt-2">
                {errors.job_location.message}
              </small>
            )}
          </div>
        </div>
      </div>
      <button>submit</button>
    </section>
  );
}

export default AboutRole;
