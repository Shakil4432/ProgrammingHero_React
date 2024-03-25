import React from "react";
import user from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div>
      <div className="text-center">
        <div className=" min-h-[80vh]   bg-base-200">
          <div className=" flex flex-col justify-between  items-center max-w-6xl lg:flex-row mx-auto">
            <div className=" p-4">
              <h1 className="text-5xl font-bold">
                One Step Closer To Your <span className="text-blue-300">Dream Job</span>
              </h1>
              <p className="py-6">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <button className="btn btn-primary bg-blue-400 border-none">Get Started</button>
            </div>
            <img src={user} className="w-[50%] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
