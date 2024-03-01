import CheckoutContextProvider from "../../context/CheckoutContext.jsx";
import  Form  from "./Form.jsx";


function PostJob() {
  return (
    <div>
      <main>
        <div className="px-5 font-Arial">
          <h1 className="text-3xl italic font-bold mt-10 mb-5">Post a job</h1>
          <p className="mb-3">
            Reach our audience of global remote workers for just{" "}
            <span className="font-bold">$100 for a 30 day listing.</span>
          </p>
          <p className="italic text-sm">
            As a minimum positions must allow 2 days remote working per week to
            list on JustRemote.
          </p>
        </div>
        <div className="mt-10">
          <CheckoutContextProvider>
            <Form />
          </CheckoutContextProvider>
        </div>
      </main>
    </div>
  );
}

export default PostJob;
