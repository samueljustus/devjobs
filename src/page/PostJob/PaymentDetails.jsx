
import { useFormContext } from "react-hook-form";

function PaymentDetails() {
    const {
        register,
        formState: { errors },
      } = useFormContext()
  return (
    <section className="mt-7">
        <h2 className="bg-[#f15d5d] text-[#ffffff] uppercase text-xs italic w-36 px-3 py-1 mb-5">
          payment details
        </h2>
        <div className="p-3">
          <div>
            <label
              htmlFor="first-name"
              className=" block text-sm uppercase mt-4 mb-2"
            >
              your First name*
            </label>
            <input
              type="text"
              id="first-name"
              name="first_name"
              className={`${
                errors.first_name
                  ? "border border-red-500"
                  : "border-2 border-[#dddddd]"
              } w-[100%] h-16 outline-none px-3 text-sm`}
              {...register("first_name", {
                required: "Please provide a first name",
              })}
            />
            {errors.first_name && (
              <small className="text-sm text-red-500 block mt-2">
                {errors.first_name.message}
              </small>
            )}
          </div>
          <div>
            <label
              htmlFor="surname"
              className=" block text-sm uppercase mt-4 mb-2"
            >
              your surname name*
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              className={`${
                errors.surname
                  ? "border border-red-500"
                  : "border-2 border-[#dddddd]"
              } w-[100%] h-16 outline-none px-3 text-sm`}
              {...register("surname", {
                required: "please provide a surname",
              })}
            />
            {errors.surname && (
              <small className="text-sm text-red-500 block mt-2">
                {errors.surname.message}
              </small>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className=" block text-sm uppercase mt-4 mb-2"
            >
              your email*
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className={`${
                errors.email
                  ? "border border-red-500"
                  : "border-2 border-[#dddddd]"
              } w-[100%] h-16 outline-none px-3 text-sm`}
              {...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
            />
            {errors.email?.type === "required" && (
              <small className="text-sm text-red-500 block mt-2">
                Please provide a contact email
              </small>
            )}
            {errors.email?.type === "pattern" && (
              <small className="text-sm text-red-500 block mt-2">
                Please provide a valid contact email
              </small>
            )}
          </div>
          <div>
          {/* <Button /> */}
          </div>
        </div>
      </section>
  )
}

export default PaymentDetails
