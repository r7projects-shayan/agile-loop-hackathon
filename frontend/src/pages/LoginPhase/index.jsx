import React from "react";

export const LoginPhase = () => {
  return (
    <div className="bg-[#131313] flex flex-row justify-center w-full">
      <div className="bg-[#131313] w-[1512px] h-[982px] relative">
        <div className="absolute w-[289px] h-[114px] top-[194px] left-[136px]">
          <div className="absolute w-[152px] h-[46px] top-0 left-0">
            <img className="absolute w-[51px] h-[46px] top-0 left-0" alt="Quixflow logo" src="images/quixflow-logo-2.png" />
            <img className="absolute w-[101px] h-[46px] top-0 left-[51px]" alt="Mask group" src="images/mask-group.png" />
          </div>
          <div className="absolute top-[60px] left-0.5 [font-family:'Haskoy-ExtraBold',Helvetica] font-extrabold text-white text-[42px] tracking-[0] leading-[normal]">
            Welcome Back!
          </div>
        </div>
        <div className="absolute w-[463px] h-[621px] top-[180px] left-[864px]">
          <div className="absolute w-[463px] h-[621px] top-0 left-0">
            <div className="absolute w-[457px] h-16 top-[353px] left-0 bg-black rounded-[10px] border border-solid border-[#313131]">
              <div className="top-[22px] left-[155px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
                Login with Google
              </div>
            </div>
            <div className="absolute w-[457px] h-16 top-[429px] left-0 bg-black rounded-[10px] border border-solid border-[#313131]">
              <div className="top-5 left-[161px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
                Login with Apple
              </div>
            </div>
            <div className="absolute w-[457px] h-16 top-[505px] left-0 bg-black rounded-[10px] border border-solid border-[#313131]">
              <div className="absolute top-5 left-[107px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
                Login with Microsoft Account
              </div>
            </div>
            <div className="absolute w-[459px] h-16 top-0 left-0">
              <div className="relative w-[457px] h-16 bg-black rounded-[10px] border border-solid border-[#313131]">
                <div className="absolute w-[121px] top-[19px] left-7 [font-family:'Inter-Regular',Helvetica] font-normal text-[#949494] text-lg text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  Email Address
                </div>
              </div>
            </div>
            <div className="absolute w-[459px] h-16 top-[83px] left-0">
              <div className="relative w-[457px] h-16 bg-black rounded-[10px] border border-solid border-[#313131]">
                <div className="absolute w-[121px] top-[19px] left-7 [font-family:'Inter-Regular',Helvetica] font-normal text-[#949494] text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                  Password
                </div>
              </div>
            </div>
            <div className="absolute w-[254px] h-[19px] top-[259px] left-[117px]">
              <div className="absolute top-0 left-0 [font-family:'Inter-Light',Helvetica] font-light text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Don’t have an account?
              </div>
              <div className="absolute top-0 left-[191px] [font-family:'Inter-Light',Helvetica] font-light text-[#1783b1] text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Sign Up
              </div>
            </div>
            <div className="absolute w-[239px] h-[19px] top-[602px] left-[115px]">
              <div className="absolute w-[239px] h-[19px] top-0 left-0">
                <div className="absolute top-0 left-0 [font-family:'Inter-Light',Helvetica] font-light text-[#1783b1] text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  Terms of Use
                </div>
                <div className="absolute top-0 left-[131px] [font-family:'Inter-Light',Helvetica] font-light text-[#1783b1] text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  Privacy Policy
                </div>
              </div>
              <img
                className="absolute w-px h-[18px] top-px left-[114px] object-cover"
                alt="Vector"
                src="images/vector_3.svg"
              />
            </div>
            <div className="absolute w-[25px] h-[19px] top-[302px] left-[222px]">
              <div className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                OR
              </div>
            </div>
            <div className="absolute w-[459px] h-16 top-[171px] left-0">
              <div className="relative w-[457px] h-16 bg-[#1783b1] rounded-[10px] border border-solid border-[#313131]">
                <div className="absolute w-[77px] top-[22px] left-[189px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  Continue
                </div>
              </div>
            </div>
            <img
              className="absolute w-[190px] h-px top-[309px] left-[267px] object-cover"
              alt="Vector"
              src="images/vector_1.svg"
            />
            <img className="absolute w-[190px] h-px top-[309px] left-0 object-cover" alt="Vector" src="images/vector_2.svg" />
          </div>
          <img className="absolute w-6 h-6 top-[103px] left-[414px]" alt="Group" src="images/group-13.png" />
        </div>
        <div className="absolute w-[527px] h-[524px] top-[458px] left-[138px] bg-[url(OBJECTS.png)] bg-[100%_100%]">
          <img className="absolute w-[29px] h-1.5 top-[103px] left-[120px]" alt="Vector" src="images/vector-6.svg" />
          <img className="absolute w-[27px] h-[11px] top-[127px] left-96" alt="Vector" src="images/vector-7.svg" />
        </div>
      </div>
    </div>
  );
};
