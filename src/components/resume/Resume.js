import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <section id="resume" className="w-full min-h-screen flex flex-col justify-center items-center py-20 border-b-[1px] border-b-black">
      {/* Title */}
      <div className="text-center mb-12">
        <Title title="My Information" des="About Me" />
      </div>

      {/* Tabs */}
      <div className="flex justify-center items-center">
        <ul className="flex space-x-8 text-lg font-medium">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setAchievementData(false);
            }}
            className={`cursor-pointer py-3 px-6 border-2 ${
              educationData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            }`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setAchievementData(false);
            }}
            className={`cursor-pointer py-3 px-6 border-2 ${
              skillData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            }`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setAchievementData(true);
            }}
            className={`cursor-pointer py-3 px-6 border-2 ${
              achievementData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            }`}
          >
            Achievements
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="w-full mt-12">
        {educationData && <Education />}
        {skillData && <Skills />}
        {achievementData && <Achievement />}
      </div>
    </section>
  );
};

export default Resume;
