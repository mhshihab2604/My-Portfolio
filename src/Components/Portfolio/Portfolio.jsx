import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { RiLiveLine } from "react-icons/ri";
import { IoCodeSlashSharp } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='mx-2'>
      <div className="container mx-auto text-center mt-20">
        <div className="font-bold leading-tight mb-10">
          <TypeAnimation
            sequence={[
              'About',
              1000,
              'About My',
              2000,
              'About My Portfolio',
              2000,
            ]}
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <p className="text-lg text-white mb-8">
          A portfolio is a curated collection of work that showcases skills, accomplishments, and creative abilities. It serves as a professional tool to demonstrate expertise and attract potential clients, employers, or collaborators. Each piece within a portfolio is selected to highlight quality, problem-solving capabilities, and the unique style of the creator. It typically includes examples of past projects, accompanied by descriptions that provide context and explain objectives, processes, and outcomes. A well-designed portfolio not only exhibits professionalism but also effectively communicates one's capabilities and personal brand, making it essential for career advancement and business opportunities.
        </p>
      </div>
      <div className='max-w-6xl mx-auto grid lg:grid-cols-3 grid-cols-1 gap-5 mt-20'>
        <div className="max-w-xl rounded overflow-hidden border-2 border-[#643484] p-2">
          <figure>
            <img
              src="https://i.ibb.co/ZLcCjbf/one-1.png"
              alt="ShiHab"
              className="w-full"
              style={{ height: '300px', width: '100%' }} // Adjust height as needed
            />
          </figure>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Uses Language :</div>
            <p className="text-gray-700 text-base flex items-start gap-5">
              <FaHtml5 className='h-10 w-10 text-[#e85c31]'></FaHtml5>
              <IoLogoCss3 className='h-10 w-10 text-[#7fc1f6]'></IoLogoCss3>
              <SiJavascript className='h-10 w-10 text-[#ffdf00]'></SiJavascript>
              <RiFirebaseLine className='h-10 w-10 text-[#ffcb2d]'></RiFirebaseLine>
              <FaReact className='h-10 w-10 text-[#7fc1f6]'></FaReact>
              <SiMongodb className='h-10 w-10 text-[#479241]'></SiMongodb>
            </p>
          </div>
          <p>The Parcel Management System built using the MERN stack offers a comprehensive platform for booking and managing parcel deliveries. Users can book parcels with detailed information, while admins can assign delivery personnel and manage bookings efficiently.</p>
          <div className="flex lg:flex-row flex-col justify-center lg:gap-4">
            
            <Link
              to="https://full-stack-project-785ad.web.app"
              className="btn bg-transparent border-[#643484] mt-4 text-white hover:bg-[#643484] hover:text-white px-10 hover:border-none flex items-center justify-center"
            >
                View Live <RiLiveLine className='text-xl'></RiLiveLine>
            </Link> 
            <Link
              to="https://github.com/mhshihab2604/Parcel-Project-Client"
              className="btn bg-transparent border-[#643484] mt-4 text-white hover:bg-[#643484] hover:text-white px-10 hover:border-none flex items-center justify-center"
            >
              Code Link <IoCodeSlashSharp className='text-xl'></IoCodeSlashSharp>
            </Link>
          </div>
        </div>
        <div className="max-w-xl rounded overflow-hidden border-2 border-[#643484] p-2">
          <figure>
            <img
              src="https://i.ibb.co/gTGHnv9/two-1.png"
              alt="ShiHab"
              className="w-full"
              style={{ height: '300px', width: '100%' }} // Adjust height as needed
            />
          </figure>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Uses Language :</div>
            <p className="text-gray-700 text-base flex items-start gap-5">
              <FaHtml5 className='h-10 w-10 text-[#e85c31]'></FaHtml5>
              <IoLogoCss3 className='h-10 w-10 text-[#7fc1f6]'></IoLogoCss3>
              <SiJavascript className='h-10 w-10 text-[#ffdf00]'></SiJavascript>
              <RiFirebaseLine className='h-10 w-10 text-[#ffcb2d]'></RiFirebaseLine>
              <FaReact className='h-10 w-10 text-[#7fc1f6]'></FaReact>
              <SiMongodb className='h-10 w-10 text-[#479241]'></SiMongodb>
            </p>
          </div>
          <p>Create a user-friendly Volunteer Management Website using MERN stack, featuring authentication, CRUD operations, dynamic routing, dark/light theme toggle, and optional features like animations and pagination.if you are logged in then that will be show.</p>
          <div className="flex lg:flex-row flex-col justify-center lg:gap-4">
            <Link
              to="https://assignment-11-d3fcc.web.app"
              className="btn bg-transparent border-[#643484] mt-4 text-white hover:bg-[#643484] hover:text-white px-10 hover:border-none flex items-center justify-center"
            >
              View Live <RiLiveLine className='text-xl'></RiLiveLine>
            </Link>
            <Link
              to="https://github.com/mhshihab2604/Volunteer-Project-Client"
              className="btn bg-transparent border-[#643484] mt-4 text-white hover:bg-[#643484] hover:text-white px-10 hover:border-none flex items-center justify-center"
            >
              Code Link <IoCodeSlashSharp className='text-xl'></IoCodeSlashSharp>
            </Link>
          </div>
        </div>
        <div className="max-w-xl rounded overflow-hidden border-2 border-[#643484] p-2">
          <figure>
            <img
              src="https://i.ibb.co/SP9BHZ9/three-1.png"
              alt="ShiHab"
              className="w-full"
              style={{ height: '300px', width: '100%' }} // Adjust height as needed
            />
          </figure>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Uses Language :</div>
            <p className="text-gray-700 text-base flex items-start gap-5">
              <FaHtml5 className='h-10 w-10 text-[#e85c31]'></FaHtml5>
              <IoLogoCss3 className='h-10 w-10 text-[#7fc1f6]'></IoLogoCss3>
              <SiJavascript className='h-10 w-10 text-[#ffdf00]'></SiJavascript>
              <RiFirebaseLine className='h-10 w-10 text-[#ffcb2d]'></RiFirebaseLine>
              <FaReact className='h-10 w-10 text-[#7fc1f6]'></FaReact>
              <SiMongodb className='h-10 w-10 text-[#479241]'></SiMongodb>
            </p>
          </div>
          <p>A react project with some estates , where you can see states details to click view details button. you can register and login in my website,You update your profile also. and there are two privates route in my website,if you are logged in then that will be show.</p>
          <div className="flex lg:flex-row flex-col justify-center lg:gap-4">
            <Link
              to="https://real-state-project-2604.netlify.app"
              className="btn bg-transparent border-[#643484] mt-4 text-white hover:bg-[#643484] hover:text-white px-10 hover:border-none flex items-center justify-center"
            >
              View Live <RiLiveLine className='text-xl'></RiLiveLine>
            </Link>
            <Link
              to="https://github.com/mhshihab2604/Real-State-Assignment"
              className="btn bg-transparent border-[#643484] mt-4 text-white hover:bg-[#643484] hover:text-white px-10 hover:border-none flex items-center justify-center"
            >
              Code Link <IoCodeSlashSharp className='text-xl'></IoCodeSlashSharp>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
