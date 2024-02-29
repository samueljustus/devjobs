import React, { useState } from "react";
// import Checkout from "./Checkout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from "./Checkout";
const initialOptions = {
  "client-id":
    "AeMCnh8XaGMy6uppsHT5u5CG6RRimT9mOk30L5Y2IUwNFGzLOWgYMb4ZqKqJ3oNkHMrf3Fq1xOoBsAFH",
  currenncy: "USD",
  intent: "capture",
};
function Paypal() {
  const [checkout, setCheckout] = useState(false);
  return (
    <div>
      {checkout ? (
        <PayPalScriptProvider options={initialOptions}>
          <Checkout />
        </PayPalScriptProvider>
      ) : (
        <button onClick={() => setCheckout(true)}>checkout</button>
      )}
    </div>
  );
}

export default Paypal;
