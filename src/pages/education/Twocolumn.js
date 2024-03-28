import React from "react";

export default function Twocolumn() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-6 ">
        <p className="mt-4 font-medium text-base md:text-lg 2xl:text-xl max-w-xl 2xl:max-w-4xl_ text-primary font-sans">
          We provide resources to meet your learning style and needs. From
          papers and articles for the reader, training programs for the doer to
          strength talks, coaching tips and an exercise video library for the
          viewer — explore our comprehensive collection of materials to support
          your coaching and strength training journey.
        </p>
      </div>
    </div>
  );
}
