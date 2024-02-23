import { createContext, useState, useEffect } from "react";

export const FrontendJobContext = createContext({});

function FrontendJobContextProvider({ children }) {
  const [frontendJobData, setFrontEndJobData] = useState("");

  const getFrontEndJob = async () => {
    const data = await fetch(
      "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=87e58175&app_key=0decc13310e5a58e6e180a682d690540&results_per_page=40&what=frontend%20developer&what_and=frontend%20developer&what_phrase=frontend&max_days_old=7"
    );
    const response = await data.json();
    setFrontEndJobData(response)
  };
  useEffect(() => {
    getFrontEndJob();
  }, []);

  return <FrontendJobContext.Provider value={{frontendJobData, setFrontEndJobData}}>{children}</FrontendJobContext.Provider>;
}

export default FrontendJobContextProvider;
