import JobContextProvider from "../../context/jobContext.jsx"
import BodyCopy from "./BodyCopy.jsx"
import LatestJobList from "./LatestJobList.jsx"

function Home() {
  return (
    <JobContextProvider>
    <div>
      <BodyCopy />
      <LatestJobList />
    </div>
    </JobContextProvider>
  )
}

export default Home
