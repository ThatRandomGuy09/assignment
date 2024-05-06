import type { NextPage } from "next";
import Image from "next/image";

const WebHome: NextPage = () => {
  return (
    <div className="w-full relative bg-bg-color h-[832px] overflow-hidden text-left text-xl text-primary font-header-2">
      <div className="absolute top-0 left-0 w-full h-[74px] bg-bg-color border-b-[2px] border-solid border-border">
        <b className="absolute top-[21px] right-[80px] tracking-[0.06em]">
          Sign Out
        </b>
        <div className="absolute top-[21px] left-[80px] flex items-center gap-2 lg:gap-6 text-5xl text-white font-motley-forces">
          <div className="relative tracking-[0.06em]">Lo</div>
          <div className="rounded-lg bg-primary flex items-start justify-start py-1 px-2">
            <div className="relative tracking-[0.06em] uppercase">Go</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[102px] left-[80px] flex flex-col items-start justify-start text-white">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="w-[1120px] flex flex-row items-center justify-between">
            <div className="relative tracking-[0.06em] leading-[140%] font-semibold">
              Popular Topics 🔥
            </div>
            <div className="w-20 flex flex-row items-center justify-between">
              <div className="w-[30px] relative h-[30px]">
                <div className="absolute h-[106.67%] w-[106.67%] top-[-3.33%] right-[-3.33%] bottom-[-3.33%] left-[-3.33%] rounded-md bg-bg-color box-border border-[1px] border-solid border-border" />
                <div className="absolute h-2/5 w-3/5 top-[30%] right-[20%] bottom-[30%] left-[20%]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
                    alt=""
                    src=""
                    width={30}
                    height={30}
                  />
                </div>
              </div>
              <div className="w-[30px] relative h-[30px]">
                <div className="absolute h-[106.67%] w-[106.67%] top-[-3.33%] right-[-3.33%] bottom-[-3.33%] left-[-3.33%] rounded-md bg-bg-color box-border border-[1px] border-solid border-border" />
                <div className="absolute h-2/5 w-3/5 top-[30%] right-[20%] bottom-[30%] left-[20%]">
                  <div className="absolute h-[26.67%] w-full top-[36.67%] right-[0%] bottom-[36.67%] left-[0%]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[1px] bg-white" />
                  </div>
                  <Image
                    className="absolute top-[0px] left-[11px] w-1.5 h-3"
                    alt=""
                    src="/Group 56"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1120px] relative h-[222px] overflow-x-auto shrink-0 text-center text-base">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[20px]">
              <div className="w-[360px] relative h-[222px]">
                <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-bg-color box-border w-[362px] h-56 border-[1px] border-solid border-border" />
                <div className="absolute top-[162px] left-[12px] w-[336px] h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-lg bg-bg-color box-border w-[338px] h-[50px] border-[1px] border-solid border-border" />
                  <b className="absolute top-[13px] left-[145px] tracking-[0.06em] leading-[140%] uppercase">
                    Read
                  </b>
                </div>
                <div className="absolute top-[12px] left-[140px] flex flex-col items-start justify-start gap-[8px] text-left">
                  <div className="w-52 relative tracking-[0.06em] leading-[140%] font-semibold inline-block">
                    Introduction to Rocket Science
                  </div>
                  <div className="w-52 relative text-xs tracking-[0.06em] leading-[140%] text-gray-400 inline-block">{`Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and `}</div>
                </div>
                <div className="absolute top-[21px] left-[12px] w-[120px] h-[120px]">
                  <Image
                    className="absolute top-[0px] left-[0px] w-[120px] h-[120px] object-cover"
                    alt=""
                    src="/rocket.png"
                    width={120}
                    height={120}
                  />
                </div>
              </div>
              <div className="w-[360px] relative h-[222px]">
                <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-bg-color box-border w-[362px] h-56 border-[1px] border-solid border-border" />
                <div className="absolute top-[162px] left-[12px] w-[336px] h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-lg bg-bg-color box-border w-[338px] h-[50px] border-[1px] border-solid border-border" />
                  <b className="absolute top-[13px] left-[145px] tracking-[0.06em] leading-[140%] uppercase">
                    Read
                  </b>
                </div>
                <div className="absolute top-[12px] left-[140px] flex flex-col items-start justify-start gap-[8px] text-left">
                  <div className="w-52 relative tracking-[0.06em] leading-[140%] font-semibold inline-block">
                    Astro Physics
                  </div>
                  <div className="w-52 relative text-xs tracking-[0.06em] leading-[140%] text-gray-400 inline-block">{`Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and `}</div>
                </div>
                <Image
                  className="absolute top-[21px] left-[12px] w-[120px] h-[120px] object-cover"
                  alt=""
                  src="/atom.png"
                  width={120}
                  height={120}
                />
              </div>
              <div className="w-[360px] relative h-[222px]">
                <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-bg-color box-border w-[362px] h-56 border-[1px] border-solid border-border" />
                <div className="absolute top-[162px] left-[12px] w-[336px] h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-lg bg-bg-color box-border w-[338px] h-[50px] border-[1px] border-solid border-border" />
                  <b className="absolute top-[13px] left-[calc(50%_-_23px)] tracking-[0.06em] leading-[140%] uppercase">
                    Read
                  </b>
                </div>
                <div className="absolute top-[12px] left-[140px] flex flex-col items-start justify-start gap-[8px] text-left">
                  <div className="w-52 relative tracking-[0.06em] leading-[140%] font-semibold inline-block">
                    Artificial Intelligence
                  </div>
                  <div className="w-52 relative text-xs tracking-[0.06em] leading-[140%] text-gray-400 inline-block">
                    Covers fundamentals, design, construction, operation and
                    programming of robots.
                  </div>
                </div>
                <Image
                  className="absolute top-[21px] left-[12px] w-[120px] h-[120px] object-cover"
                  alt=""
                  src="/AI.png"
                  width={120}
                  height={120}
                />
              </div>
              <div className="w-[360px] relative h-[222px]">
                <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-bg-color box-border w-[362px] h-56 border-[1px] border-solid border-border" />
                <div className="absolute top-[162px] left-[12px] w-[336px] h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-lg bg-bg-color box-border w-[338px] h-[50px] border-[1px] border-solid border-border" />
                  <b className="absolute top-[13px] left-[calc(50%_-_23px)] tracking-[0.06em] leading-[140%] uppercase">
                    Read
                  </b>
                </div>
                <div className="absolute top-[12px] left-[140px] flex flex-col items-start justify-start gap-[8px] text-left">
                  <div className="w-52 relative tracking-[0.06em] leading-[140%] font-semibold inline-block">
                    Astro Physics
                  </div>
                  <div className="w-52 relative text-xs tracking-[0.06em] leading-[140%] text-gray-400 inline-block">{`Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and `}</div>
                </div>
                <Image
                  className="absolute top-[21px] left-[12px] w-[120px] h-[120px] object-cover"
                  alt=""
                  src="/rocket.png"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebHome;
