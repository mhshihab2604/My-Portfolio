import React from 'react';

const Skill = ({ name, level }) => {
  return (
    <div className="bg-[#70407A] shadow-md rounded-lg p-4 flex items-center space-x-4 transform transition-transform hover:scale-105 hover:bg-[#1E1232]">
        <div className="text-lg font-semibold text-white">{name}</div>
        <div className="w-full bg-[#1E1232] rounded-full h-2.5">
            <div
            className="bg-white h-2.5 rounded-full"
            style={{ width: `${level}%` }}
            ></div>
        </div>
    </div>

  );
};

export default Skill;
