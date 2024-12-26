import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Developer.", "Full Stack Developer.", "Data Scientist."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">Hi!</h4>
        <h1 className="text-6xl font-bold text-white">
          I'm <span className="text-designColor capitalize">Rajesh Kovvuru</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am currently pursuing final year in SRMUAP.
        </p>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/12RP2OAWU5rE70lHETl79rU7B_9IYzdqx/view?usp=sharing" // Replace with your resume's URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white font-medium text-lg border-2 border-designColor rounded-md px-4 py-2 transition-colors duration-300 hover:bg-designColor hover:text-black"
          style={{
            marginTop: "10px",
            alignSelf: "flex-start",
          }}
        >
          My Resume
        </a>
      </div>

      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
