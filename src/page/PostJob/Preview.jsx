import { useFormContext } from "react-hook-form";
function Preview() {
  const { watch } = useFormContext();

  const jobTitle = watch("jobtitle", "Job Title");

  console.log(jobTitle);
  return (
    <section className="h-screen font-Arial p-3">
      <h2 className="italic text-xl font-semibold">Preview:</h2>
      <p>Complete the form on the left to watch your listing come to life</p>
      <div>
        <div>
          <h1>Job Title</h1>
          <div>
            <p>contract</p>
            <p>fully</p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>image</div>
            </div>
            <p>company name</p>
          </div>
          <p>about your company</p>
          <p>how should people apply</p>
        </div>
      </div>
      <div>
        <p>About your role....</p>
        <div>
          {/* unchanged */}
          <h2>Experience</h2>
          {/* unchanged */}
          <p>required skills and experience...</p>
        </div>
        <div>
          {/* unchanged */}
          <h2>Salary and Perks</h2>
          {/* unchanged */}
          <p>salary and perks</p>
        </div>
      </div>
    </section>
  );
}

export default Preview;
