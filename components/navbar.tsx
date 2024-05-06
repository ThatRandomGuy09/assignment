import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full relative bg-bg-color h-[832px] overflow-hidden text-left text-xl text-primary font-header-2">
      <div className="absolute top-0 left-0 w-full h-[74px] bg-bg-color border-b-[2px] border-solid border-border">
        <b className="absolute top-[21px] right-[80px] tracking-[0.06em]">
          Sign Out
        </b>
        <div className="absolute top-[21px] left-[80px] flex items-center  text-5xl text-white font-motley-forces">
          <div className="relative mr-2 ">Lo</div>
          <div className="rounded-lg bg-primary flex items-start justify-start py-1 px-1">
            <div className="relative uppercase">Go</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
