import { PayPalButtons } from "@paypal/react-paypal-js";
function Checkout() {
  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "100.00",
          },
        },
      ],
    });
  };

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
    });
  };
  return (
    <div className="checkout">
      <PayPalButtons
        style={{ layout: "vertical" }}
        // className=""
        createOrder={(data, actions) => onCreateOrder(data, actions)}
        onApprove={(data, actions) => onApproveOrder(data, actions)}
      />
    </div>
  );
}

export default Checkout;
