import React, { useState } from 'react'
import { getDataFromStorage, removeJob } from '../LocalStorage/LocalStorage'
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
  const [jobHandle, setJobHandle] = useState([]);
  const jobs = getDataFromStorage();
  const handleDelete = (idx)=>{
    const remainingJobs = jobs.filter(job => job.id !== idx);
    setJobHandle(remainingJobs);
    removeJob(idx)
  }
  return (
    <div>
        <div className='p-20'>
          {
            jobs.map(job => <AppliedJob jobHandle={jobHandle} handleDelete={handleDelete} removeAble={true} key={job.id} job={job}></AppliedJob> )
          }
        </div>
    </div>
  )
}

export default AppliedJobs