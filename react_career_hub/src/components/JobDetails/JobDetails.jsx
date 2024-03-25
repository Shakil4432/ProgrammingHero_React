import React from "react";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import money from "../../assets/icons/money.png";
import title from "../../assets/icons/calendar.png";
import phone from "../../assets/icons/phone.png";
import email from "../../assets/icons/email.png";
import Location from "../../assets/icons/location2.png";
import { setDataToStorage } from "../LocalStorage/LocalStorage";
import Loader from "../Loader/Loader";


const JobDetails = () => {
  const navigation = useNavigation();
  const jobs = useLoaderData();
  const { id } = useParams();
  const indId = parseInt(id)
  const job = jobs.find((jobid) => jobid.id == indId);
  const {
    job_title,
    experiences,
    salary,
    job_description,
    contact_information,
    job_responsibility,
    educational_requirements,
  } = job;

  const handleJobCategory = (idx)=>{
      setDataToStorage(idx);
  }

  if(navigation.state === 'loading')return <Loader></Loader>
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center p-10">JOB DETAILS</h1>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <div className="p-8">
            <span className="text-lg font-bold">Job Description : </span>
            <p>{job_description}</p>
          </div>
          <div className="p-8">
            <span className="text-lg font-bold">Job Responsibility : </span>
            <p>{job_responsibility}</p>
          </div>
          <div className="p-8">
            <span className="text-lg font-bold">
              Educational Requirements: :{" "}
            </span>
            <p>{educational_requirements}</p>
          </div>
          <div className="p-8">
            <span className="text-lg font-bold">Experiences : </span>
            <p>{experiences}</p>
          </div>
        </div>
        <div className="bg-gray-200 relative rounded-lg p-4 h-[70vh]">
          <h1 className="text-xl font-bold">Job Details</h1>
          <hr className="border border-gray-400" />
          <div className="">
            <div className="flex  items-center gap-2 p-2">
              <img src={money} alt="" />
              <span>Salary : {salary} (Per Month)</span>
            </div>
            <div className="flex  items-center gap-2 p-2">
              <img src={title} alt="" />
              <span>Job Title : {job_title}</span>
            </div>
            <h1 className="text-xl font-bold ">
              Contact Information
            </h1>
            <hr className="border border-gray-400" />
            <div className="flex  items-center gap-2 p-2">
              <img src={phone} alt="" />
              <span>Phone : {contact_information.phone}</span>
            </div>
            <div className="flex  items-center gap-2 p-2">
              <img src={email} alt="" />
              <span>Email : {contact_information.email} </span>
            </div>
            <div className="flex  items-center gap-2 p-2">
              <img src={Location} alt="" />
              <span>Address : {contact_information.address}</span>
            </div>

            <button onClick={()=>handleJobCategory(job)} className="btn absolute bottom-0 btn-primary w-full left-0">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
