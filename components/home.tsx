"use client";
"use client";
import { NextPage } from "next";
import Image from "next/image";
import { useRef } from "react";
import Navbar from "./navbar";

const WebHome: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
  };

  return (
    <>
      <Navbar />
      <div className="absolute top-[102px] left-[80px] flex flex-col items-start justify-start text-white">
        <div className="flex items-center justify-between w-full px-4">
          <div className="relative tracking-[0.06em] leading-[140%] font-semibold">
            Popular Topics 🔥
          </div>
          <div className="flex items-center gap-4 md:mr-12">
            <button onClick={scrollLeft}>{"<-"}</button>
            <button onClick={scrollRight}>{"->"}</button>
          </div>
        </div>
        <div className="w-full overflow-x-auto mt-4" ref={scrollRef}>
          <div className="flex flex-col md:flex-row items-center justify-start gap-4 px-4 md:mt-12">
            {/* Card 1 */}
            <div className="w-full md:w-[280px] relative h-[222px] ml-0 md:ml-12">
              <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-bg-color box-border w-[282px] h-56 border-[1px] border-solid border-border" />
              <div className="absolute top-[162px] left-[12px] w-[266px] h-12">
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-bg-color box-border w-[268px] h-[50px] border-[1px] border-solid border-border" />
                <b className="absolute top-[13px] left-[110px] tracking-[0.06em] leading-[140%] uppercase">
                  Read
                </b>
              </div>
              <div className="absolute top-[54px] left-[110px] flex flex-col items-start justify-start gap-[8px] text-left">
                <div className="w-full md:w-52 mr-0 md:mr-12 relative tracking-[0.06em] leading-[140%] font-semibold inline-block">
                  Rocket Science
                </div>
                <div className="w-full md:w-52 mr-0 md:mr-36 relative text-xs tracking-[0.06em] leading-[140%] text-gray-400 inline-block">
                  Covers fundamentals, construction, operation, programming of
                  robots.
                </div>
              </div>
              <Image
                className="absolute top-[21px] left-[12px] w-[80px] h-[120px] object-cover"
                alt=""
                src="/rocket.png"
                width={80}
                height={120}
              />
            </div>
            {/* Card 2 */}
            <div className="w-full md:w-[280px] relative h-[222px] ml-0 md:ml-12">
              <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-bg-color box-border w-[282px] h-56 border-[1px] border-solid border-border" />
              <div className="absolute top-[162px] left-[12px] w-[266px] h-12">
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-bg-color box-border w-[268px] h-[50px] border-[1px] border-solid border-border" />
                <b className="absolute top-[13px] left-[110px] tracking-[0.06em] leading-[140%] uppercase">
                  Read
                </b>
              </div>
              <div className="absolute top-[54px] left-[110px] flex flex-col items-start justify-start gap-[8px] text-left">
                <div className="w-full md:w-52 relative tracking-[0.06em] leading-[140%] font-semibold inline-block">
                  Astro Physics
                </div>
                <div className="w-full md:w-52 mr-0 md:mr-24 relative text-xs tracking-[0.06em] leading-[140%] text-gray-400 inline-block">
                  Covers fundamentals, construction, operation programming of
                  robots.
                </div>
              </div>
              <Image
                className="absolute top-[21px] left-[12px] w-[80px] h-[120px] object-cover"
                alt=""
                src="/rocket.png"
                width={80}
                height={120}
              />
            </div>
            {/* Card 3 */}
            <div className="w-full md:w-[280px] relative h-[222px] ml-0 md:ml-12">
              <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-bg-color box-border w-[282px] h-56 border-[1px] border-solid border-border" />
              <div className="absolute top-[162px] left-[12px] w-[266px] h-12">
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-bg-color box-border w-[268px] h-[50px] border-[1px] border-solid border-border" />
                <b className="absolute top-[13px] left-[110px] tracking-[0.06em] leading-[140%] uppercase">
                  Read
                </b>
              </div>
              <div className="absolute top-[54px] left-[110px] flex flex-col items-start justify-start gap-[8px] text-left">
                <div className="w-full md:w-52 mr-0 md:mr-24 relative tracking-[0.06em] leading-[140%] font-semibold inline-block">
                  AI
                </div>
                <div className="w-full md:w-52 mr-0 md:mr-36 relative text-xs tracking-[0.06em] leading-[140%] text-gray-400 inline-block">
                  Covers fundamentals, construction, operation programming of
                  robots.
                </div>
              </div>
              <Image
                className="absolute top-[21px] left-[12px] w-[80px] h-[120px] object-cover"
                alt=""
                src="/rocket.png"
                width={80}
                height={120}
              />
            </div>
            {/* Card 4 */}
            <div className="w-full md:w-[280px] relative h-[222px] ml-0 md:ml-12">
              <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-bg-color box-border w-[282px] h-56 border-[1px] border-solid border-border" />
              <div className="absolute top-[162px] left-[12px] w-[266px] h-12">
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-bg-color box-border w-[268px] h-[50px] border-[1px] border-solid border-border" />
                <b className="absolute top-[13px] left-[110px] tracking-[0.06em] leading-[140%] uppercase">
                  Read
                </b>
              </div>
              <div className="absolute top-[54px] left-[110px] flex flex-col items-start justify-start gap-[8px] text-left">
                <div className="w-full md:w-52 relative tracking-[0.06em] leading-[140%] font-semibold inline-block">
                  Advanced Robotics
                </div>
                <div className="w-full md:w-52 mr-0 md:mr-24 relative text-xs tracking-[0.06em] leading-[140%] text-gray-400 inline-block">
                  Covers advanced topics in robotics, including Ml and computer vision
                </div>
              </div>
              <Image
                className="absolute top-[21px] left-[12px] w-[80px] h-[120px] object-cover"
                alt=""
                src="/rocket.png"
                width={80}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebHome;
