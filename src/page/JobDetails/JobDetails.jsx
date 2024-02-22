import { useState, useEffect, useContext } from "react";
import { JobContext } from "../../context/jobContext";
import { useParams } from "react-router-dom";
function JobDetails() {
  const{latestJobData, setLatestJob} = useContext(JobContext)
  const { jobDetailsId } = useParams();
  console.log(jobDetailsId);

  const job = latestJobData.results.find((job) => job.id === jobDetailsId)
  console.log(job)

  if(!job){
    return <p>{`so sorry an error occur our dev has been notified`}</p>    // incase of an error
  }

  return (
    <div>
      {job && (
        <>
        
        </>
      )}
    </div>
  )
}

export default JobDetails;
