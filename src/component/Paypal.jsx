import React, { useContext } from "react";
// import Checkout from "./Checkout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from "./Checkout";
import { CheckoutContext } from "../context/CheckoutContext";
const initialOptions = {
  "client-id":
    "AeMCnh8XaGMy6uppsHT5u5CG6RRimT9mOk30L5Y2IUwNFGzLOWgYMb4ZqKqJ3oNkHMrf3Fq1xOoBsAFH",
  currenncy: "USD",
  intent: "capture",
};

function Paypal() {
  const { checkout, setCheckout } = useContext(CheckoutContext);
  console.log(checkout);
  return (
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
  );
}

export default Paypal;
