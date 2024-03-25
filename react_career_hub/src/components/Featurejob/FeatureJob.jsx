import React from "react";
import locationIcon from "../../assets/icons/Location.png"
import moneyLogo from "../../assets/icons/money.png"
import { Link } from "react-router-dom";

const FeatureJob = ({ featureJob }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    contact_information,
    
  } = featureJob;
  return (
    <div>
      <div className="p-6 rounded-md space-y-4 text-left shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img src={logo} alt="" className="rounded-md" />
        <div className="mt-6 mb-2 ">
          <h2 className="block text-xl font-bold tracking-widest ">
            {job_title}
          </h2>
          <span className="tracking-wide">{company_name}</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-3 py-1 bg-white border rounded-md text-blue-400 font-semibold border-blue-500">{job_type}</button>
          <button className="px-3 py-1 bg-white border rounded-md text-blue-400 font-semibold border-blue-500">{remote_or_onsite}</button>
        </div>
        <div className="flex gap-4 items-center">
            <div className="flex justify-center items-center gap-2">
                <img src={locationIcon} alt="" />
                <span>{location}</span>
            </div>
            <div className="flex justify-center items-center gap-2">
                <img src={moneyLogo} alt="" />
                <span>{salary}</span>
            </div>
        </div>
        <div>
            <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureJob;
