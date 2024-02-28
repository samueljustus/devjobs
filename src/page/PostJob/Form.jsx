import { useForm } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { techStack } from "../../Data/DropDownSelect";
import { tools } from "../../Data/DropDownSelect";
function Form() {
  const animatedComponent = makeAnimated();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="font-Arial">
      <section>
        <h2 className="bg-[#f15d5d] text-[#ffffff] uppercase text-xs italic w-32 px-3 py-1">
          1. listing type
        </h2>
        <div className="px-3 mb-10">
          <p className="mt-5 mb-2 uppercase text-sm">
            are you inhouse or a recruiter?*
          </p>
          <input
            type="radio"
            id="inhouse"
            name="inhouse-recruiter"
            className="hidden peer/inhouse"
          />
          <label
            htmlFor="inhouse"
            className="px-2 py-1 border border-[#f2f2f2] text-[#1b1b1b] peer-checked/inhouse:bg-[#1b1b1b] peer-checked/inhouse:text-[#ffffff]  mr-2"
          >
            Inhouse
          </label>
          <input
            type="radio"
            id="recruiter"
            name="inhouse-recruiter"
            className="hidden peer/recruiter"
          />
          <label
            htmlFor="recruiter"
            className="px-2 py-1 border border-[#f2f2f2] text-[#1b1b1b] peer-checked/recruiter:bg-[#1b1b1b] peer-checked/recruiter:text-[#ffffff]"
          >
            Recruiter
          </label>
        </div>
      </section>
      <section>
        <h2 className="bg-[#f15d5d] text-[#ffffff] uppercase text-xs italic w-52 px-3 py-1">
          2. Tell us about the role
        </h2>
        <div className="mx-3">
          <label
            htmlFor="jobtitle"
            className="block uppercase text-sm mt-5 mb-2"
          >
            Job title*
          </label>
          <input
            type="text"
            id="jobtitle"
            className="border-2 border-[#dddddd] w-[100%] h-20 outline-none px-3 text-sm"
          />
          <div className="mb-7">
            <p className="text-sm uppercase mt-4 mb-3">job type*</p>
            <input
              type="radio"
              id="permanent"
              name="permanent-contract"
              className="hidden peer/permanent"
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
            />
            <label
              htmlFor="contract"
              className="px-2 py-1 border border-[#f2f2f2] text-[#1b1b1b] peer-checked/contract:bg-[#1b1b1b] peer-checked/contract:text-[#ffffff]"
            >
              contract
            </label>
          </div>
          <div>
            <p className="text-sm uppercase mt-4 mb-3">
              fully or partially remote*
            </p>
            <input
              type="radio"
              id="fully"
              name="fully-partially"
              className="hidden peer/fully"
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
              name="fully-partially"
              className="hidden peer/partially"
            />
            <label
              htmlFor="partially"
              className="px-2 py-1 border border-[#f2f2f2] text-[#1b1b1b] peer-checked/partially:bg-[#1b1b1b] peer-checked/partially:text-[#ffffff]"
            >
              Partially Remote
            </label>
            <div className="hidden peer-checked/partially:block mt-7">
              <label
                htmlFor="remotedays"
                className="text-sm uppercase mt-4 mb-3"
              >
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
              htmlFor="about-company"
              className=" block text-sm uppercase mt-4 mb-3"
            >
              About the Company*
            </label>
            <input
              type="text"
              id="about-comapany"
              className="border-2 border-[#dddddd] w-[100%] h-20 outline-none px-3 text-sm"
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
              className="border-2 border-[#dddddd] w-[100%] h-20 outline-none px-3 text-sm"
            />
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
              className="border-2 border-[#dddddd] w-[100%] h-20 outline-none px-3 text-sm"
            />
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
              className="border-2 border-[#dddddd] w-[100%] h-20 outline-none px-3 text-sm"
            />
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
              className="border-2 border-[#dddddd] w-[100%] h-20 outline-none px-3 text-sm"
            />
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
            <p className="text-sm uppercase mt-4 mb-3">resident of a specific country requirements*</p>
            <input
              type="radio"
              id="specific-country-required"
              name="specification"
              className="hidden peer/yes"
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
              name="specification"
              className="hidden peer/no"
            />
            <label
              htmlFor="specific-country-not-required"
              className="px-2 py-1 border border-[#f2f2f2] text-[#1b1b1b] peer-checked/no:bg-[#1b1b1b] peer-checked/no:text-[#ffffff]"
            >
              No
            </label>
          <div className="mb-7 mt-7 hidden peer-checked/no:block">
            <p className="text-sm uppercase mt-4 mb-3">minimum working hour overlap requirements*</p>
            <input
              type="radio"
              id="working-hour-required"
              name="working-hours"
              className="hidden peer/yes"
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
              className="hidden peer/no"
            />
            <label
              htmlFor="working-hours-not-required"
              className="px-2 py-1 border border-[#f2f2f2] text-[#1b1b1b] peer-checked/no:bg-[#1b1b1b] peer-checked/no:text-[#ffffff]"
            >
              No
            </label>
          </div>
          <div>
          <label htmlFor="about" className=" block text-sm uppercase mt-4 mb-3">Job location*</label>
          <input
              type="text"
              id="how-to-apply"
              className="border-2 border-[#dddddd] w-[100%] h-14 outline-none px-3 text-sm"
              placeholder="Search Cities..."
            />
          </div>
          </div>
        </div>
      </section>
    </form>
  );
}

export default Form;
