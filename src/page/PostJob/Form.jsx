import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import AboutRole from "./AboutRole";
import AboutCompany from "./AboutCompany";
import PaymentDetails from "./PaymentDetails";
import ListingType from "./ListingType";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from "../../component/Checkout";
const initialOptions = {
  "client-id":
    "AeMCnh8XaGMy6uppsHT5u5CG6RRimT9mOk30L5Y2IUwNFGzLOWgYMb4ZqKqJ3oNkHMrf3Fq1xOoBsAFH",
  currenncy: "USD",
  intent: "capture",
};

function Form() {
  const form = useForm();

  const onSubmit = (value) => {
    console.log(value);
    setCheckout(true);
  };

  const [checkout, setCheckout] = useState(false);

  return (
    <FormProvider {...form}>
      <form className="font-Arial" onSubmit={form.handleSubmit(onSubmit)}>
        <ListingType />
        <AboutRole />
        <AboutCompany />
        <PaymentDetails />
        <div>
          {checkout ? (
            <PayPalScriptProvider options={initialOptions}>
              <Checkout />
            </PayPalScriptProvider>
          ) : (
            <button
              type="submit"
              // onClick=
              className="w-[100%] py-5 text-center mt-5 bg-[#f15d5d] text-[#ffff] rounded-sm"
            >
              Post job-$100/30 days
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}

export default Form;
