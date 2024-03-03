import React from "react";
import { Link } from "react-router-dom";
function WhyListWithUs() {
  return (
    <div className="font-Arial mt-16  lg:w-[50%] lg:m-auto">
      <h1 className="text-center uppercase text-lg">
        Why List Your Job Positions With justdev
      </h1>
      <main className="p-5">
        <section className=" p-4 border-2 border-[#f7f7f7] border-l-[#19ffb8] border-l-4 shadow-sm rounded-md mb-10">
          <h2 className="text-2xl italic font-bold mb-4">
            People Find Your Job Quicker
          </h2>
          <p className="text-lg mb-3">
            We're building a platform that's optimised for remote job hunters.
          </p>
          <p className="text-lg mb-3">We mean really optimised.</p>
          <p className="text-lg mb-2">
            JustRemote allows users to filter faster, this means they don't
            spend hours trawling through job descriptions and can instead focus
            on applying to roles just like yours.
          </p>
        </section>
        <section className=" p-4 border-2 border-[#f7f7f7] border-l-[#19ffb8] border-l-4 shadow-sm rounded-md mb-10">
          <h2 className="text-2xl italic font-bold mb-4">
            Your Job Won't be Missed
          </h2>
          <p className="text-lg mb-2">
            We care about curating the right jobs for our users. This means your
            job will never be buried in mass of irrelevant roles. This helps
            keep our engagement rates higher and means you're more likely to
            find the right applicant.
          </p>
        </section>
        <section className=" p-4 border-2 border-[#f7f7f7] border-l-[#19ffb8] border-l-4 shadow-sm rounded-md mb-10">
          <h2 className="text-2xl italic font-bold mb-4">
            Super Engagement Rates!
          </h2>
          <p className="text-lg mb-2">
            We focus on user experience, this means users want to be on our
            site, they stay here longer and are more likely to discover and
            engage with your role.
          </p>
        </section>
        <section className=" p-4 border-2 border-[#f7f7f7] border-l-[#19ffb8] border-l-4 shadow-sm rounded-md mb-10">
          <h2 className="text-2xl italic font-bold mb-4">
            Reach the right people
          </h2>
          <p className="text-lg mb-2">
            We cater very specifically to job hunters looking for remote work
            opportunities in tailored categories. This ensures your role reaches
            the right people.
          </p>
        </section>
        <section className=" p-4 border-2 border-[#f7f7f7] border-l-[#19ffb8] border-l-4 shadow-sm rounded-md mb-10">
          <h2 className="text-2xl italic font-bold mb-4">Quick and Easy</h2>
          <p className="text-lg mb-3">
            We've thought through all the requirements of remote working so you
            don't have to.
          </p>
          <p className="text-lg">
            Restrict your recruitment to specific countries or require specific
            working day overlaps from your remote workers. We've made it simple
            and clear so that everyone knows where they stand.
          </p>
        </section>
      </main>
      <div className="p-5">
        <h3 className="text-center text-lg mb-3">Don't miss out</h3>
        <p className="text-lg mb-3 text-center">
          List your remote job today to find out for yourself
        </p>
        <Link to="/postjob">
        <button className="w-[100%] py-3 bg-[#f15d5d] text-[#ffff] rounded-sm text-left pl-10">
          List our job!
        </button>
        </Link>
      </div>
    </div>
  );
}

export default WhyListWithUs;
