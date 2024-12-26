import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PROJECTS AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Food Delivery Website"
          des="A food delivery platform allowing users to order meals seamlessly with a user-friendly interface by using MERN."
          src={projectOne}
          githubLink="https://github.com/kovvuruRajesh/Food_Delivery_MERN"
          liveLink="https://food-delivery-mern-frontend-eabe.onrender.com/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des="A feature-rich e-commerce site offering a smooth shopping experience with multiple categories using ReactJS."
          src={projectTwo}
          githubLink="https://github.com/kovvuruRajesh/E-Commerce"
          liveLink="https://e-commerce-silk-nu.vercel.app/"
        />
        <ProjectsCard
          title="Zoom Clone"
          des="A Zoom-inspired video conferencing app with real-time chat and meeting controls by using NextJS."
          src={projectThree}
          githubLink="https://github.com/kovvuruRajesh/Join_Now"
          liveLink="https://join-now-theta.vercel.app/"
        />
        <ProjectsCard
          title="Attendance Application"
          des="An attendance tracking application using Python and OpenCV."
          src={projectFour}
          githubLink="https://github.com/kovvuruRajesh/Face_Recognition"
          // liveLink="https://attendance-live.com"
        />
        <ProjectsCard
          title="Authentication System"
          des="Machine Learning Project By using SVM, KNN, Decison Tree, Randome Forest"
          src={projectFive}
          githubLink="https://github.com/kovvuruRajesh/EEG-based-Person-Identification-and-Authentication"
          // liveLink="https://authentication-live.com"
        />
        <ProjectsCard
          title="Movie Review Website"
          des="A real-time Movie Review Application works on Sentimental Analysis."
          src={projectSix}
          githubLink="https://github.com/kovvuruRajesh/RMDB_Movie_Review"
          // liveLink="https://chatting-app-live.com"
        />
      </div>
    </section>
  );
};

export default Projects;
