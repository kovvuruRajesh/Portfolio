import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      {/* Header */}
      <div className="py-6 font-titleFont flex flex-col gap-4 text-center">
        <p className="text-sm text-designColor tracking-[4px]">2019 - 2025</p>
        <h2 className="text-3xl md:text-4xl font-bold">Achievements & Experience</h2>
      </div>

      {/* Timeline */}
      <div className="relative w-full h-full">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-600"></div>

        {/* Cards */}
        <div className="flex flex-col gap-10">
          {/* Card 1 */}
          <div className="flex justify-start items-center">
            <div className="w-[45%]">
              <ResumeCard
                title="Kaggle Expert"
                subTitle="SRMUAP"
                result="Success"
                des="I am Kaggle Expert i have published some notebooks and datasets."
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex justify-end items-center">
            <div className="w-[45%]">
              <ResumeCard
                title="Eamcet"
                subTitle="Narayana Junior College."
                result="Success"
                des="I got 5000 Rank in eamcet."
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex justify-start items-center">
            <div className="w-[45%]">
              <ResumeCard
                title="Gold Medal"
                subTitle="Aditya High School"
                result="Success"
                des="I got Gold Medal for getting 10/10 in my 10th class."
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
