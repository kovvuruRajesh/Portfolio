import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <div className="flex gap-4">
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/kovvuru-rajesh-80a43323a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          {/* GitHub */}
          <a 
            href="https://github.com/kovvuruRajesh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/kovvuru.rajesh/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Media;
