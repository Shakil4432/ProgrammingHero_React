import React, { useEffect, useState } from "react";
import FeatureJob from "../Featurejob/FeatureJob";

const FeaturedJobs = () => {
    const [featuresJob, setFeaturesJob] = useState([]);
    const [showAll , setShowAll] = useState(4);
    
    const handleSeeMore = ()=>{
       setShowAll(featuresJob.length);
    }
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setFeaturesJob(data));
    },[])
  return (
    <div className="mt-20 max-w-6xl mx-auto">
      <div className="text-center space-y-6">
        <h2 className="text-5xl font-bold">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information <br /> you
          need. Its your future
        </p>

        <div className="grid grid-cols-2 justify-center items-center gap-4">
            {
                featuresJob.slice(0,showAll).map(featureJob => <FeatureJob key={featureJob.id} featureJob={featureJob}></FeatureJob>)
            }
        </div>
        <button className={`btn btn-primary ${featuresJob.length === showAll ? 'hidden' :''}`} onClick={handleSeeMore}>SEE MORE</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
