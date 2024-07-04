import { TypeAnimation } from 'react-type-animation';
import Skill from './Skill';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Firebase', level: 70 },
  { name: 'MongoDB', level: 80 },
];

const SkillsSection = () => {
  return (
    <section>
      <div className="container mx-auto px-4 mt-20">
        <div className="font-bold text-center leading-tight mb-10">
          <TypeAnimation
            sequence={[
              'My',
              1000,
              'My Skills',
              2000,
            ]}
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <Skill key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>

      <div className='max-w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-20 px-8'>
        <div className="group relative max-w-[350px] overflow-hidden bg-gradient-to-r from-[#74427D] to-[#201236] px-6 py-6 text-white shadow">
            <span className="absolute left-[-40%] top-[30%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#74427D] to-[#201236] duration-300 group-hover:top-[-30%] group-hover:blur-sm"></span>
            <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#74427D] to-[#201236] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
            <div className="relative z-20 space-y-6">
                <h1 className="text-2xl font-bold">HTML & CSS</h1>
                <p> Learn the basics of HTML and CSS to build and style web pages</p>
                <img className="w-full h-auto rounded-md" src="https://i.ibb.co/0tDFDDk/htcs.jpg" alt="" />
                <button className="bg-[#201236] px-6 py-2">Get Started</button>
            </div>
        </div>


        <div className="group relative max-w-[350px] overflow-hidden bg-gradient-to-r from-[#74427D] to-[#201236] px-6 py-6 text-white shadow">
            <span className="absolute left-[-40%] top-[30%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#74427D] to-[#201236] duration-300 group-hover:top-[-30%] group-hover:blur-sm"></span>
            <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#74427D] to-[#201236] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
            <div className="relative z-20 space-y-6">
                <h1 className="text-2xl font-bold">JavaScript</h1>
                <p> Learn JavaScript to add interactivity to your web pages and enhance user experience.</p>
                <img className="w-full h-auto rounded-md" src="https://i.ibb.co/ncFDdzh/javascript.jpg" alt="" />
                <button className="bg-[#201236] px-6 py-2">Get Started</button>
            </div>
        </div>


        <div className="group relative max-w-[350px] overflow-hidden bg-gradient-to-r from-[#74427D] to-[#201236] px-6 py-6 text-white shadow">
            <span className="absolute left-[-40%] top-[30%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#74427D] to-[#201236] duration-300 group-hover:top-[-30%] group-hover:blur-sm"></span>
            <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#74427D] to-[#201236] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
            <div className="relative z-20 space-y-6">
                <h1 className="text-2xl font-bold">MongoDB</h1>
                <p> Learn MongoDB, a NoSQL database, to efficiently store data for your applications.</p>
                <img className="w-full h-auto rounded-md" src="https://i.ibb.co/pPfKXhG/mongo.png" alt="" />
                <button className="bg-[#201236] px-6 py-2">Get Started</button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
