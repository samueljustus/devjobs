
import {  useFormContext } from "react-hook-form";

function ListingType() {
      const {
        register,
        formState: { errors },
      } = useFormContext();

  return (
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
            checked={true}
            value="inhouse"
            name="inhouse-recruiter"
            className="hidden peer/inhouse"
            {...register("agency")}
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
            value="recruiter"
            name="inhouse-recruiter"
            className="hidden peer/recruiter"
            {...register("agency")}
          />
          <label
            htmlFor="recruiter"
            className="px-2 py-1 border border-[#f2f2f2] text-[#1b1b1b] peer-checked/recruiter:bg-[#1b1b1b] peer-checked/recruiter:text-[#ffffff]"
          >
            Recruiter
          </label>
        </div>
      </section>
  )
}

export default ListingType
