import React from "react";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    companyName,
    companyLogo,
    minPrice,
    jobTitle,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
  } = data;

  return (
    <section className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow duration-300">
      <Link to={"/"} className="flex flex-col sm:flex-row gap-4">
        <img src={companyLogo} alt="logo" className="w-16 h-16 object-cover rounded-full" />
        <div className="flex-1">
          <h4 className="text-primary font-medium text-sm mb-1">{companyName}</h4>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{jobTitle}</h3>
          <div className="text-gray-600 text-sm flex flex-wrap gap-3 mb-3">
            <span className="flex items-center gap-1">
              <FiMapPin className="text-primary" /> {jobLocation}
            </span>
            <span className="flex items-center gap-1">
              <FiClock className="text-primary" /> {employmentType}
            </span>
            <span className="flex items-center gap-1">
              <FiDollarSign className="text-primary" /> {minPrice} - {maxPrice}k {salaryType && `/${salaryType}`}
            </span>
            <span className="flex items-center gap-1">
              <FiCalendar className="text-primary" /> {postingDate}
            </span>
          </div>
          <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
