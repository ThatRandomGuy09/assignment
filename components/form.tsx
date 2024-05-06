import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

const WebSignup = () => {
  return (
    <div className="w-full relative bg-gray-100 h-[832px] overflow-hidden text-left text-17xl text-white font-motley-forces">
      <Image
        className="absolute top-[0px] left-[0px] w-[640px] h-[832px] object-cover"
        alt=""
        src="/img.jpeg"
        width={400}
        height={432}
      />
      <div className="absolute top-[39px] left-[709px] w-[435px] h-[135px] flex flex-col items-center justify-start gap-[16px]">
        <div className="flex flex-row items-center justify-center gap-[9px]">
          <div className="relative tracking-[0.06em]">Lo</div>
          <div className="rounded-[11.99px] bg-primary flex flex-row items-start justify-start py-1.5 px-3">
            <div className="relative tracking-[0.06em] uppercase">Go</div>
          </div>
        </div>
        <div className="relative text-base tracking-[0.06em] leading-[140%] font-header-2">
          Journey to a trillion miles starts from here!!
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_200px)] left-[765px] rounded-[30px] bg-gray-300 flex flex-row items-start justify-start py-[30px] px-10 text-center text-5xl font-header-2 border-[1px] border-solid border-gray-200">
        <div className="flex flex-col items-center justify-start gap-[71px]">
          <div className="flex flex-col items-center justify-start gap-[8px]">
            <div className="relative tracking-[0.06em] leading-[140%] font-semibold">
              Sign up
            </div>
            <div className="relative text-sm tracking-[0.06em] leading-[140%]">
              Choose a sign up method
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px] text-base">
            <div className="w-80 relative h-12">
              <div className="absolute h-[108.33%] w-[101.25%] top-[-4.17%] right-[-0.62%] bottom-[-4.17%] left-[-0.62%] rounded-lg bg-bg-color box-border border-[2px] border-solid border-border" />
              <div className="absolute top-[12px] left-[52px] flex flex-row items-start justify-start gap-[12px]">
                <FaGoogle className="w-6 relative h-6 overflow-hidden shrink-0" />
                <div className="relative tracking-[0.06em] leading-[140%] font-semibold">
                  Sign up with Google
                </div>
              </div>
            </div>
            <div className="w-80 relative h-12">
              <div className="absolute h-[108.33%] w-[101.25%] top-[-4.17%] right-[-0.62%] bottom-[-4.17%] left-[-0.62%] rounded-lg bg-bg-color box-border border-[2px] border-solid border-border" />
              <div className="absolute top-[12px] left-[59px] flex flex-row items-start justify-start gap-[12px]">
                <MdEmail className="w-6 relative h-6 object-cover" />
                <div className="relative tracking-[0.06em] leading-[140%] font-semibold">
                  Sign up with Email
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px] text-xs">
            <div className="relative tracking-[0.06em] leading-[140%]">
              Already a user?
            </div>
            <div className="relative tracking-[0.06em] leading-[140%] text-primary">
              Log in
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[118px] left-[959px] w-[100px] h-[100px] overflow-hidden" />
    </div>
  );
};

export default WebSignup;
