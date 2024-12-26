import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      {/* Header */}
      <div className="py-6 font-titleFont flex flex-col gap-4 text-center">
        <p className="text-sm text-designColor tracking-[4px]">2010 - 2025</p>
        <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
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
                title="BTech in Computer Science"
                subTitle="SRM University AP (2021 - 2025)"
                result="9.05/10"
                des="C, C++, Python, Java, OOPS, Operating System, Computer Networks, SQL, MERN, Machine Learning."
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex justify-end items-center">
            <div className="w-[45%]">
              <ResumeCard
                title="Science & Information"
                subTitle="Narayana Junior College (2019 - 2021)"
                result="972/1000"
                des="Maths, Physics, Chemistry."
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex justify-start items-center">
            <div className="w-[45%]">
              <ResumeCard
                title="Secondary School Education"
                subTitle="Aditya High School (2010 - 2019)"
                result="10/10"
                des="Telugu, Hindi, English, Maths, Science, Social."
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
