import { createContext, useState, useEffect } from "react";

export const FullstackJobContext = createContext({});

function FullstackJobContextProvider({ children }) {
  const [fullstackJobData, setFullstackJobData] = useState("");

  const getFullstackJob = async () => {
    try {
      const data = await fetch(
        "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=87e58175&app_key=0decc13310e5a58e6e180a682d690540&results_per_page=40&what=fullstack%20developer&what_and=fullstack%20developer&what_phrase=fullstack%20developer&max_days_old=7"
      );
      const response = await data.json();
      setFullstackJobData(response)
    } catch(err) {
      console.log(err)
    }
  } 
  useEffect(() => {
    getFullstackJob();
  }, []);

  return <FullstackJobContext.Provider value={{fullstackJobData, setFullstackJobData}}>{children}</FullstackJobContext.Provider>;
}

export default FullstackJobContextProvider;