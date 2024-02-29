import React from "react";

export default function Landing() {
  return (
    <div className="flex flex-1 md:flex-row flex-col-reverse">
      <div className="flex  container flex-4 gap-4 w-full justify-center items-center flex-col h-fit md:h-screen">
        <div className="flex gap-4">
          <h1 className="flex justify-center items-center text-4xl md:text-6xl">
            👋
          </h1>
          <div className="flex flex-1   flex-col">
            <div className="flex flex-1  font-semibold w-full">
              <h1>Hi,I am</h1>
            </div>
            <div className="flex font-bold text-2xl md:text-4xl flex-1 w-full ">
              <h1>Mudasir Pandith</h1>
            </div>
            <div className="flex font-semibold items-end justify-end flex-1 w-full">
              <h1>Full Stack Developer</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
