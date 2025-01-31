import { Film } from "lucide-react";

<div className="flex justify-center h-screen m-0 p-0">
  <div className="w-[375px] h-[308px] flex justify-center bg-indigo-700">
    <div className="w-[335px] h-[228px] my-[40px] mx-[5px] flex flex-col justify-around ">
      <div className="w-[92px] h-[20px] flex flex-row items-center justify-center gap-2 ">
        <Film className="text-[#FAFAFA]"></Film>
        <span className="text-[#FAFAFA] text-[16px] font-[Inter] italic font-bold leading-[20px] tracking-wide">
          Movie Z
        </span>
      </div>
      <div className="flex flex-col justify-between">
        <div className="w-[247px] h-[20px] text-[#FAFAFA] font-[Inter] text-[14px] my-[5%] font-normal leading-5">
          © 2024 Movie Z. All Rights Reserved.
        </div>
        <div className="h-[148px] w-[335px] my-[10%] flex flex-row justify-between">
          <div className="h-[104px] w-[174px] flex flex-col justify-between">
            <div className="w-[247px] h-[20px] text-[#FAFAFA] font-[Inter] text-[14px] font-normal leading-5">
              Contact information
            </div>
            <div className="h-[40] w-[100%] text-[#FAFAFA] font-[Inter] text-[14px] font-normal leading-5">
              support@MovieZ.com
            </div>
            <div className="h-[40] w-[100%] text-[#FAFAFA] font-[Inter] text-[14px] font-normal leading-5">
              +976 (12) 453478
            </div>
          </div>
          <div className="h-[148px] w-[113px] flex flex-col justify-between">
            <p className="text-[#FAFAFA] font-[Inter] text-[14px] font-normal leading-5">
              Follow us
            </p>
            <p className="text-[#FAFAFA] font-[Inter] text-[14px] font-normal leading-5">
              Facebook
            </p>
            <p className="text-[#FAFAFA] font-[Inter] text-[14px] font-normal leading-5">
              Twitter
            </p>
            <p className="text-[#FAFAFA] font-[Inter] text-[14px] font-normal leading-5">
              Instagram
            </p>
            <p className="text-[#FAFAFA] font-[Inter] text-[14px] font-normal leading-5">
              Youtube
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
