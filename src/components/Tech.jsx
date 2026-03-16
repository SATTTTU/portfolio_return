import React from "react";

import { SectionWrapper } from "../hoc";
import { techStack } from "../constants";

const Tech = () => {
  return (
    <div className='w-full'>
      <div className='max-w-5xl mx-auto rounded-2xl bg-black/30 border border-white/10 p-6 sm:p-8 backdrop-blur'>
        <div className='flex items-center justify-between gap-4 flex-wrap'>
          <div>
            <p className='text-[12px] sm:text-[13px] text-[#8b949e] font-semibold tracking-[0.22em]'>
              MY TOOLKIT
            </p>
            <h3 className='mt-2 text-white text-[20px] sm:text-[24px] font-bold'>
              Tech Stack
            </h3>
          </div>
          <p className='text-secondary text-[13px] sm:text-[14px] max-w-xl'>
            Clean, scalable stacks across frontend, backend, data, and DevOps.
          </p>
        </div>

        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {techStack.map((group) => (
            <div
              key={group.title}
              className='rounded-xl bg-tertiary/40 border border-white/5 p-5 hover:border-white/10 transition-colors'
            >
              <p className='text-white font-semibold text-[15px]'>
                {group.title}
              </p>
              <div className='mt-3 flex flex-wrap gap-2'>
                {group.items.map((item) => (
                  <span
                    key={`${group.title}-${item}`}
                    className='px-3 py-1 rounded-full text-[12px] text-white/90 bg-black/30 border border-white/10'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
