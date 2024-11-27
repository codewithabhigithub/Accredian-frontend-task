import React from 'react';

const Infobar = () => {
  return (
    <div className="bg-[#1A73E826] w-full h-[60px] py-[16px] px-4 md:px-16 lg:px-48 xl:px-64 m-auto flex items-center justify-center">
      {/* Banner */}
      <div className="font-medium text-base text-[#262626] text-center">
        Navigate your ideal career path with tailored expert advice
        <span className="ml-2 text-[#1A73E8] font-medium cursor-pointer">
          Contact Expert
        </span>
      </div>
    </div>
  );
};

export default Infobar;
