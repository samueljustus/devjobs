import { createContext } from "react";

export const JobContext = createContext({})

const JobContextProvider = ({}) => {
    return (
        <JobContext.Provider>

        </JobContext.Provider>
    )
}

export default JobContextProvider