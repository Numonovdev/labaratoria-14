import React from "react";

const Block = () => {
  const datas = [
    {
      orginal: "...",
      optimized: "...",
      timestamp: "20/11/2024, 07:36:25",
      before: "0,3",
      after: "0,2",
    },
    {
      orginal: "...",
      optimized: "...",
      timestamp: "20/11/2024, 07:36:25",
      before: "0,3",
      after: "0,2",
    },
    {
      orginal: "...",
      optimized: "...",
      timestamp: "20/11/2024, 07:36:25",
      before: "0,3",
      after: "0,2",
    },
    {
      orginal: "...",
      optimized: "...",
      timestamp: "20/11/2024, 07:36:25",
      before: "0,3",
      after: "0,2",
    },
  ];
  return (
    <div className="p-3 rounded-lg md:p-5 border shadow flex flex-col  ">
      <h1 className="text-black font-semibold text-xl md:text-2xl">
        Command History
      </h1>
      <div className="flex flex-col font-semibold mt-5 text-[8px] sm:text-sm  lg:text-md md:mt-10">
        <div className="grid grid-cols-5 grid-rows-1 gap-3">
          <span>Original</span>
          <span>Optimized</span>
          <span>Timestamp</span>
          <span>Before</span>
          <span>After</span>
        </div>
        {datas.map((data, index) => (
          <div key={index} className="grid grid-cols-5 grid-rows-1 gap-3 mt-3 md:mt-5 ">
            <span>{data.orginal}</span>
            <span>{data.optimized}</span>
            <span>{data.timestamp}</span>
            <span>{data.before}</span>
            <span>{data.after}</span>
          </div>
        ))}      
      </div>
    </div>
  );
};

export default Block;
