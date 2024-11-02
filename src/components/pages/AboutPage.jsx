import React from "react";
import DownloadCV from "../DownloadCV";

const AboutPage = () => {
  return (
    <section className="bg-bg-main-col text-white">
      <div className="container mx-auto ">
        {/* main section */}
        <div className="ml-20">
          <div className="w-[510px] pt-14 ">
            <h1 className="font-inter text-white text-4xl capitalize font-semibold py-5 underline underline-offset-[15px]">
              about me
            </h1>
            <p className="font-inter text-white text-md py-5 ">
              My name is{" "}
              <span className=" text-sec-color font-semibold ">
                Masrafi Mondol
              </span>{" "}
              , working on my carrier in full stack developer. Specially
              passionate{" "}
              <span className="uppercase text-sec-color ">
                MERN Stack Developer
              </span>
              .
            </p>
            <p className="font-inter text-white text-md  ">
              Having completed multiple frontend and Backend projects using
              ReactJS, NodeJs, MondoDB, Express, Tailwind and much more. Im
              confient on making user Friendly and stunning looking web
              applications.
            </p>
          </div>
          {/* card section */}
          <div>
            <div className="border border-sec-color rounded-lg h-20 w-[194px] flex justify-center items-center mt-20">
              <h2 className="font-semibold text-4xl text-sec-color pr-4">2+</h2>
              <p>
                years of <br />
                <span className="capitalize font-semibold text-2xl ">
                  experience
                </span>
              </p>
            </div>
            <div className="flex items-end gap-4 ">
              <div className="border border-sec-color rounded-lg h-20 w-[194px]   flex justify-center items-center mt-6">
                <h2 className="font-semibold text-4xl text-sec-color pr-4">
                  15+
                </h2>
                <p>
                  technology <br />
                  <span className="font-semibold text-2xl uppercase">used</span>
                </p>
              </div>
              <div>
                <button className="capitalize bg-transparent py-2 px-3 border border-sec-color rounded-md" >
                  <DownloadCV />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[510px] py-10 ">
            <p>
              Completed 1 year extensive{" "}
              <span className="uppercase font-inter font-semibold text-sec-color ">
                diploma in MERN stack
              </span>{" "}
              development and currently in BSC in Computer science and
              Engineering in Green University of Bangladesh.
            </p>
          </div>
          {/* hobbies */}
          <div>
            <h2 className="font-inter text-3xl capitalize font-bold mt-14 mb-8 ">hobbies</h2>
            <div>
              <ul className="list-disc pl-5 text-sec-color capitalize font-inter text-md ">
                <li>singing</li>
                <li>fishing</li>
                <li>travelling</li>
                <li>online games</li>
              </ul>
            </div>
          </div>
          {/* Looking for */}
          <div className="w-[540px] mt-20 ">
            <h2 className="font-inter capitalize font-bold text-3xl underline underline-offset-[15px]  ">looking for</h2>
            <p className="py-6 ">I'm looking to get into my job into the industry which I have be preparing myself for past few years. the past experience of my leading of different student educational group and national camps helps me a lot on many occasional events.</p>
          </div>
        </div>
        {/* contact */}
        <div className="w-[620px] text-center mx-auto py-[120px] " >
          <p className=" mt-20 pb-6">Feel free to contact me for anything web related. whether its related to designing a web using canva or figma or making a simple web app using only basic.</p>
          <button className="bg-transparent border rounded-lg border-sec-color py-2 px-6 text-xl capitalize ">
            contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
