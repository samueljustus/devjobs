import CheckoutContextProvider from "../../context/CheckoutContext.jsx";
import Form from "./Form.jsx";


function PostJob() {
  return (
    <div className="mt-10 w-[95%]">
      <CheckoutContextProvider>
        <Form />
      </CheckoutContextProvider>
    </div>
  );
}

export default PostJob;
