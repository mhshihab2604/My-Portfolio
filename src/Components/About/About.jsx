import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <section className="relative  text-white py-20">
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="font-bold leading-tight mb-10">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'About',
                        1000,
                        'About Me',
                        2000,
                    ]}
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}

                    repeat={Infinity}
                />
            </div>

            <p className="text-lg">
              Hello! I'm Mehedi Hasan Shihab, a passionate web developer with a love for crafting unique and functional websites and applications. With a keen eye for design and a dedication to improving user experience, I bring ideas to life through code.
            </p>
            <p className="text-lg">
              My journey in web development started one years ago, and since then, I've worked on a variety of projects that showcase my skills in front-end development. Let's create something amazing together!
            </p>
            <Link to="/contact">
              <button
                className="btn bg-transparent border-[#643484] mt-4 text-white hover:bg-[#643484] hover:text-white px-10 hover:border-none"
              >
                Contact Me
              </button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500 to-transparent rounded-lg shadow-lg transform rotate-2"></div>
            <img
              src="https://i.ibb.co/nLCjYSb/shihab3-removebg-preview.png"
              alt="Your Portrait"
              className="relative w-auto h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
