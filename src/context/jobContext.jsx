import { createContext, useEffect, useState } from "react";

export const JobContext = createContext({});

const JobContextProvider = ({ children }) => {
  const [latestJobData, setLatestJobData] = useState()
  const getLatestJob = async () => {
    try {
      const data = await fetch(
        "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=87e58175&app_key=0decc13310e5a58e6e180a682d690540&results_per_page=10&what=frontend%20developer&what_and=backend%20developer&what_or=fullstack%20developer&max_days_old=3"
      );
      console.log(data);
      const response = await data.json();
      setLatestJobData(response)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLatestJob();
  }, []);

  return <JobContext.Provider value={{latestJobData, setLatestJobData}}>{children}</JobContext.Provider>;
}

export default JobContextProvider;
