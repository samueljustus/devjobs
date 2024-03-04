import { createContext, useState, useEffect } from "react";

export const BackendJobContext = createContext({});

function BackendJobContextProvider({ children }) {
  const [backendJobData, setBackendJobData] = useState();
  const getBackEndJobs = async () => {
    try {
      const data = await fetch(
        "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=87e58175&app_key=0decc13310e5a58e6e180a682d690540&results_per_page=40&what=backend%20developer&what_and=backend%20developer&what_phrase=backend%20developer&max_days_old=7"
      );
      const response = await data.json();
      setBackendJobData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBackEndJobs();
  }, []);

  return (
    <BackendJobContext.Provider value={{ backendJobData, setBackendJobData }}>
      {children}
    </BackendJobContext.Provider>
  );
}

export default BackendJobContextProvider;
