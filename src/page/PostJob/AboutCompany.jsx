import { useFormContext } from "react-hook-form";
import React from "react";
function AboutCompany() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [thumbnail, setThumbnail] = React.useState();

  const handlePhotoChange = (e) => {
    setThumbnail(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <section>
      <h2 className="bg-[#f15d5d] text-[#ffffff] uppercase text-xs italic w-56 px-3 py-1 mb-5">
        tell us about your company
      </h2>
      <div className="p-3">
        <div>
          <label
            htmlFor="company-name"
            className=" block text-sm uppercase mt-4 mb-2"
          >
            company name*
          </label>
          <input
            type="text"
            id="company-name"
            name="company_name"
            className={`${
              errors.company_name
                ? "border border-red-500"
                : "border-2 border-[#dddddd]"
            } w-[100%] h-16 outline-none px-3 text-sm`}
            {...register("company_name", {
              required: "please provide a company name",
            })}
          />
          {errors.company_name && (
            <small className="text-sm text-red-500 block mt-2">
              {errors.company_name.message}
            </small>
          )}
        </div>
        <div>
          <label
            htmlFor="headquarters"
            className=" block text-sm uppercase mt-4 mb-3"
          >
            company headquarters*
          </label>
          <input
            type="text"
            id="headquarters"
            name="headquarters"
            className={`${
              errors.headquarters
                ? "border border-red-500"
                : "border-2 border-[#dddddd]"
            } w-[100%] h-14 outline-none px-3 text-sm`}
            placeholder="Search Cities..."
            {...register("headquarters", {
              required:
                "please provide a headquarters location. Ensure you select a location from the dropdown",
            })}
          />
          {errors.headquarters && (
            <small className="text-sm text-red-500 block mt-2">
              {errors.headquarters.message}
            </small>
          )}
        </div>
        <div>
          <label
            htmlFor="company-website"
            className=" block text-sm uppercase mt-4 mb-2"
          >
            company website*
          </label>
          <input
            type="text"
            id="company-website"
            name="company_website"
            className={`${
              errors.comapany_website
                ? "border border-red-500"
                : "border-2 border-[#dddddd]"
            } w-[100%] h-16 outline-none px-3 text-sm`}
            {...register("company_website", {
              required: "please provide a company website",
            })}
          />
          {errors.company_website && (
            <small className="text-sm text-red-500 block mt-2">
              {errors.company_website.message}
            </small>
          )}
          <div>
            <p className="block text-sm uppercase mt-4 mb-2">Company logo</p>
            <div className=" flex flex-col items-center justify-center border-2 border-[#dddddd] w-[100%] h-40 border-dotted relative">
              <label htmlFor="logo" className={`cursor-pointer absolute ${thumbnail ? 'bottom-2' : ''}`}>
                {thumbnail
                  ? "Drag or click to change image"
                  : "Drag in a file or click here to upload a logo (jpeg/png only)"}
              </label>
              <input
                id="logo"
                type="file"
                className=" hidden top-0 left-0 right-0"
                accept="image/png, image/jpeg"
                onChange={handlePhotoChange}
                name="thumbnail"
                // {...register('logo')}
              />
              <div className="w-12 h-12 absolute top-5">
                <img src={thumbnail} alt="" />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="about-company"
              className=" block text-sm uppercase mt-4 mb-2"
            >
              about your company*
            </label>
            <input
              type="text"
              id="about-company"
              name="about_company"
              className={`${
                errors.about_company
                  ? "border border-red-500"
                  : "border-2 border-[#dddddd]"
              } w-[100%] h-20 outline-none px-3 text-sm`}
              {...register("about_company", {
                required: "please provide some information about the company",
              })}
            />
            {errors.about_company && (
              <small className="text-sm text-red-500 block mt-2">
                {errors.about_company.message}
              </small>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
