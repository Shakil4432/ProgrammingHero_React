import React from "react";

const JobCategory = ({ job }) => {
  const {logo,category_name,availability} = job;
  return (
    <div>
      <div className="p-4 rounded-md w-64  shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img
          src={logo}
          alt=""
          className="rounded-md w-16"
        />
        <div className="pt-2 text-left">
          <span className="block text-xs font-medium tracking-widest uppercase">
            {category_name}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            {availability}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
