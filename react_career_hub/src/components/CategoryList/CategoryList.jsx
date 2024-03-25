import React, { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";

const CategoryList = () => {
    const [jobCategory, setJobCategory] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data => setJobCategory(data))
    },[])
  return (
    <div className="mt-20 ">
     <div className="text-center space-y-6 ">
     <h2 className="text-5xl font-bold ">Job Category List</h2>
      <p className="text-center">
        Explore thousands of job opportunities with  all the information <br /> you
        need. Its your future
      </p>
      <div className="grid grid-cols-4 justify-center items-center max-w-6xl mx-auto mt-10">
        {
            jobCategory.map(job => <JobCategory key={job.id} job={job}></JobCategory>)
        }
      </div>
     </div>
    </div>
  );
};

export default CategoryList;
