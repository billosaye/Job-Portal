import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

// Predefined options for skill selection
const options = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "C++", label: "C++" },
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "React", label: "React" },
  { value: "Redux", label: "Redux" },
];

const PostJob = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log({ ...data, skills: selectedSkills });
    
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-4">
      {/* Main form container */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Job details section */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Job Title */}
            <div>
              <label htmlFor="jobTitle" className="block mb-2 text-lg">
                Job Title
              </label>
              <input
                id="jobTitle"
                type="text"
                placeholder="Web Developer"
                {...register("jobTitle", { required: "Job title is required" })}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
              {errors.jobTitle && (
                <p className="text-sm text-red-500">
                  {errors.jobTitle.message}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block mb-2 text-lg">
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                placeholder="Microsoft"
                {...register("companyName", {
                  required: "Company name is required",
                })}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
              {errors.companyName && (
                <p className="text-sm text-red-500">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            {/* Minimum Salary */}
            <div>
              <label htmlFor="minSalary" className="block mb-2 text-lg">
                Min Salary
              </label>
              <input
                id="minSalary"
                type="text"
                placeholder="$20k"
                {...register("minSalary", {
                  required: "Minimum salary is required",
                })}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
              {errors.minSalary && (
                <p className="text-sm text-red-500">
                  {errors.minSalary.message}
                </p>
              )}
            </div>

            {/* Maximum Salary */}
            <div>
              <label htmlFor="maxSalary" className="block mb-2 text-lg">
                Max Salary
              </label>
              <input
                id="maxSalary"
                type="text"
                placeholder="$100k"
                {...register("maxSalary", {
                  required: "Maximum salary is required",
                })}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
              {errors.maxSalary && (
                <p className="text-sm text-red-500">
                  {errors.maxSalary.message}
                </p>
              )}
            </div>

            {/* Salary Type */}
            <div>
              <label htmlFor="salaryType" className="block mb-2 text-lg">
                Salary Type
              </label>
              <select
                id="salaryType"
                {...register("salaryType", {
                  required: "Salary type is required",
                })}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="">Choose Your Salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              {errors.salaryType && (
                <p className="text-sm text-red-500">
                  {errors.salaryType.message}
                </p>
              )}
            </div>

            {/* Job Location */}
            <div>
              <label htmlFor="jobLocation" className="block mb-2 text-lg">
                Job Location
              </label>
              <input
                id="jobLocation"
                type="text"
                placeholder="New York"
                {...register("jobLocation", {
                  required: "Job location is required",
                })}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
              {errors.jobLocation && (
                <p className="text-sm text-red-500">
                  {errors.jobLocation.message}
                </p>
              )}
            </div>

            {/* Job Posting Date */}
            <div>
              <label htmlFor="postingDate" className="block mb-2 text-lg">
                Job Posting Date
              </label>
              <input
                id="postingDate"
                type="date"
                {...register("postingDate", {
                  required: "Posting date is required",
                })}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 focus:outline-none sm:text-sm sm:leading-6"
              />
              {errors.postingDate && (
                <p className="text-sm text-red-500">
                  {errors.postingDate.message}
                </p>
              )}
            </div>

            {/* Experience Level */}
            <div>
              <label htmlFor="experienceLevel" className="block mb-2 text-lg">
                Experience Level
              </label>
              <select
                id="experienceLevel"
                {...register("experienceLevel", {
                  required: "Experience level is required",
                })}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="">Select Your Experience Level</option>
                <option value="Any experience">Any Experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work Remotely</option>
                <option value="Mid-level">Mid-level</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
                <option value="Expert">Expert</option>
              </select>
              {errors.experienceLevel && (
                <p className="text-sm text-red-500">
                  {errors.experienceLevel.message}
                </p>
              )}
            </div>

            {/* Company Logo */}
            <div>
              <label htmlFor="companyLogo" className="block mb-2 text-lg">
                Company Logo
              </label>
              <input
                id="companyLogo"
                type="url"
                placeholder="https://weshare.com/img1"
                {...register("companyLogo", {
                  required: "Company logo URL is required",
                })}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
              {errors.companyLogo && (
                <p className="text-sm text-red-500">
                  {errors.companyLogo.message}
                </p>
              )}
            </div>

            {/* Employment Type */}
            <div>
              <label htmlFor="employmentType" className="block mb-2 text-lg">
                Employment Type
              </label>
              <select
                id="employmentType"
                {...register("employmentType", {
                  required: "Employment type is required",
                })}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="">Select Your Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Temporary">Temporary</option>
                <option value="Part-time">Part-time</option>
              </select>
              {errors.employmentType && (
                <p className="text-sm text-red-500">
                  {errors.employmentType.message}
                </p>
              )}
            </div>
          </div>

          {/* Required Skills section */}
          <div className="mt-8">
            <label htmlFor="skills" className="block mb-2 text-lg">
              Required Skill Sets:
            </label>
            <Controller
              name="skills"
              control={control}
              render={({ field }) => (
                <CreatableSelect
                  {...field}
                  id="skills"
                  options={options}
                  isMulti
                  onChange={(newValue) => {
                    setSelectedSkills(newValue);
                    field.onChange(newValue);
                  }}
                  className="create-job-input py-4"
                />
              )}
            />
          </div>

          {/* 7th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
              rows={6}
              placeholder="We are looking for a dedicated professional to join our team. The ideal candidate should have strong technical skills, the ability to work in a collaborative environment, and a passion for innovation."
              {...register("description")}
            />
          </div>

          {/* last row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted By</label>
            <input
              type="email"
              placeholder="your email"
              {...register("postedBy")}
              className="create-job-input"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer hover:bg-blue-600 transition-colors duration-300"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
