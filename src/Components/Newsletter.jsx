import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa";

const Newsletter = () => {
  return (
    <>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Get in touch with us for customized jobs
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="newsletterEmail"
            id="newsletterEmail"
            placeholder="Enter Email"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value="Subscribe"
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get Noticed Faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          You will be connected to top employers
        </p>
        <div className="w-full space-y-4">
          <input
            type="file"
            name="resumeUpload"
            id="resumeUpload"
            placeholder="Upload Resume"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value="Upload Your Resume"
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
