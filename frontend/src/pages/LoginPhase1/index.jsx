import React from "react";
// import { Chart } from "./Chart";
import Sidebar1 from "../../components/Sidebar1";
// import { Microphone2 } from "./Microphone2";
// import { Profile } from "./Profile";
// import { Setting2 } from "./Setting2";

export const LoginPhase1 = () => {
  return (
    <div className="bg-[#131313] flex flex-row justify-center w-full">
      <div className="bg-[#131313] w-[1512px] h-[982px] relative">
        <div className="absolute w-[905px] h-[982px] top-0 left-0">
          <div className="absolute w-[905px] h-[982px] top-0 left-0">
            <div className="absolute w-[778px] h-[62px] top-[158px] left-[127px] bg-black rounded-[10px_10px_0px_0px]" />
            <div className="absolute w-[85px] h-[982px] top-0 left-0 bg-black" />
            {/* <Setting2 className="!absolute !w-8 !h-8 !top-[898px] !left-[27px]" /> */}
            <Sidebar1 />
            {/* <img className="absolute w-[778px] h-[761px] top-[157px] left-[127px]" alt="Union" src="images/setting-2.svg" /> */}
            {/* <img className="absolute w-px h-4 top-[168px] left-[518px]" alt="Vector" src="images/vector-4.svg" /> */}
            <div className="absolute w-10 h-[17px] top-[168px] left-[166px] bg-[url(image-7.png)] bg-cover bg-[50%_50%]">
              {/* <img className="absolute w-[23px] h-[17px] top-0 left-4" alt="Mask group" src="" /> */}
            </div>
            <img className="absolute w-[85px] h-3.5 top-[170px] left-[278px]" alt="Image" src="images/image-2.png" />
            <div className="absolute w-[62px] h-4 top-[168px] left-[415px] bg-[url(image-4.png)] bg-[100%_100%]">
              {/* <img className="absolute w-[49px] h-4 top-0 left-[13px]" alt="Mask group" src="" /> */}
            </div>
            <div className="absolute w-8 h-[22px] top-[167px] left-[347px] [background:linear-gradient(180deg,rgb(29.31,29.31,29.31)_29.37%,rgba(29,29,29,0.23)_62.21%)]" />
            <div className="top-40 left-[536px] [font-family:'Inter-Medium',Helvetica] text-[#4e4e4e] text-2xl text-center leading-[normal] absolute font-medium tracking-[0]">
              +
            </div>
            <div className="top-40 left-[483px] -rotate-45 [font-family:'Inter-Medium',Helvetica] text-[#4e4e4e] text-2xl text-center leading-[normal] absolute font-medium tracking-[0]">
              +
            </div>
            <div className="top-40 left-[234px] -rotate-45 [font-family:'Inter-Medium',Helvetica] text-[#4e4e4e] text-2xl text-center leading-[normal] absolute font-medium tracking-[0]">
              +
            </div>
            <div className="top-40 left-[371px] -rotate-45 [font-family:'Inter-Medium',Helvetica] text-[#4e4e4e] text-2xl text-center leading-[normal] absolute font-medium tracking-[0]">
              +
            </div>
            <div className="absolute w-[746px] h-[81px] top-[817px] left-36">
              <div className="relative w-[744px] h-[81px] bg-black rounded-[10px] border border-solid border-[#313131]">
                {/* <Microphone2 className="!absolute !w-6 !h-6 !top-7 !left-[675px]" /> */}
                <p className="absolute top-7 left-[25px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#949494] text-lg text-center tracking-[0] leading-[normal]">
                  Type Your Chat Prompt Here
                </p>
              </div>
            </div>
            <p className="absolute w-[348px] top-[453px] left-[501px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-white text-4xl tracking-[0] leading-[42px]">
              Hi Shayan,
              <br />
              What can I help you?
            </p>
            <img
              className="absolute w-[90px] h-[23px] top-[846px] left-[718px] object-cover"
              alt="Picture"
              src="images/picture1-1.png"
            />
            <img
              className="absolute w-[693px] h-[476px] top-[341px] left-[70px]"
              alt="Mask group"
              src="images/mask-group.png"
            />
          </div>
          <img className="absolute w-[152px] h-[46px] top-6 left-[125px]" alt="Group" src="images/group-3.png" />
          <div className="absolute top-[23px] left-[301px] [font-family:'Outfit-Medium',Helvetica] font-medium text-[#b5f2f7] text-sm tracking-[0] leading-[42px] whitespace-nowrap">
            Workspace
          </div>
          <div className="top-3.5 left-[287px] [font-family:'Outfit-Medium',Helvetica] text-white text-sm leading-[60px] whitespace-nowrap absolute font-medium tracking-[0]">
            |
          </div>
        </div>
        <div className="absolute w-8 h-8 top-[31px] left-[1443px] bg-white rounded-2xl">
          {/* <Profile className="!absolute !w-6 !h-6 !top-1 !left-1" /> */}
        </div>
        <div className="absolute w-[524px] h-[760px] top-[158px] left-[947px] bg-[#1d1d1d] rounded-[10px]">
          <div className="absolute w-[245px] h-[265px] top-[266px] left-[150px]">
            {/* <Chart className="!absolute !w-[236px] !h-[236px] !top-0 !left-[5px]" /> */}
            <p className="absolute top-[223px] left-0 [font-family:'Outfit-Medium',Helvetica] font-medium text-[#7f7f7f] text-base text-center tracking-[0] leading-[42px] whitespace-nowrap">
              Visualization will be displayed here
            </p>
          </div>
          <img
            className="absolute w-[178px] h-[169px] top-[583px] left-[342px] object-cover"
            alt="Image"
            src="images/image-9.png"
          />
        </div>
      </div>
    </div>
  );
};
