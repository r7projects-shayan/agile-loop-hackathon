import React from "react";

export const WelcomePage = () => {
  return (
    <div className="bg-[#0d0d0d] flex flex-row justify-center w-full">
      <div className="bg-[#0d0d0d] w-[1512px] h-[1610px]">
        <div className="relative h-[1610px]">
          <img
            className="absolute w-[1512px] h-[491px] top-0 left-0 object-cover"
            alt="Sean sinclair"
            src="images/sean-sinclair-1xz0sqlpe4e-unsplash-1.png"
          />
          <img className="absolute w-[1512px] h-[843px] top-[7px] left-0" alt="Rectangle" src="images/rectangle-3.png" />
          <img className="absolute w-[233px] h-1.5 top-[450px] left-[760px]" alt="Vector" src="images/vector-5.png" />
          <p className="absolute w-[800px] top-[164px] left-[375px] [font-family:'Outfit-Black',Helvetica] font-black text-transparent text-[80px] text-center tracking-[0] leading-[normal]">
            <span className="text-[#b4f2f7]">Supercharge Your </span>
            <span className="text-[#edf7b4]">SaaS</span>
            <span className="text-[#b4f2f7]">&nbsp;</span>
            <span className="text-[#1c743f]">Works</span>
            <span className="text-[#b4f2f7]">.</span>
          </p>
          <div className="absolute w-[762px] top-[462px] left-[357px] bg-clip-text [-webkit-text-fill-color:White] [text-fill-color:transparent] [font-family:'Outfit',Helvetica] font-semibold text-transparent text-2xl text-center tracking-[0] leading-[normal]">
            Powered by
          </div>
          <div className="absolute w-[412px] h-[22px] top-[66px] left-[555px]">
            <div className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
              Home
            </div>
            <div className="absolute top-0 left-[131px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
              Features
            </div>
            <div className="absolute top-0 left-[280px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
              Plans &amp; Pricing
            </div>
          </div>
          <p className="absolute top-[400px] left-[445px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-xl text-center tracking-[0] leading-[normal]">
            <span className="text-white">
              Quixflow supercharges your SaaS productivity using Agile Loop AI
              <br />
            </span>
            <span className="text-[#526e8c]">Reduce Your Mundane Tasks, Focus On What Matters.</span>
          </p>
          <img className="absolute w-[174px] h-[53px] top-[51px] left-[120px]" alt="Group" src="images/group-3.png" />
          <div className="absolute w-[1024px] h-[624px] top-[765px] left-[263px] bg-[url(main.png)] bg-cover bg-[50%_50%]">
            <div className="relative w-[812px] h-[521px] top-8 left-[106px] bg-[#191919]" />
          </div>
          <img className="absolute w-[1511px] h-[652px] top-[958px] left-px" alt="Rectangle" src="images/rectangle-2.svg" />
          <button className="absolute w-[282px] h-11 top-[683px] left-[598px] bg-no-repeat" style={{ backgroundImage: "url('images/frame-2.png')" }}></button>
          <div className="flex w-[105px] items-center justify-center gap-2.5 p-2.5 absolute top-14 left-[1287px] bg-[#204773] rounded-[10px]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
              Contact
            </div>
          </div>
          <button className="absolute w-[376px] h-11 top-[606px] left-[557px] bg-no-repeat"  style={{ backgroundImage: "url('images/group-2.png')" }}></button>
          <img
            className="absolute w-[1099px] h-[125px] top-[1389px] left-[207px]"
            alt="Mask group"
            src="images/mask-group.svg"
          />
          <img
            className="absolute w-[814px] h-[529px] top-[790px] left-[367px] object-cover"
            alt="Dashboard quixflow"
            src="images/dashboard-quixflow-1.png"
          />
          <img
            className="absolute w-[219px] h-[53px] top-[501px] left-[615px] object-cover"
            alt="Picture"
            src="images/picture1-1.png"
          />
          <img
            className="absolute w-[60px] h-[13px] top-[1245px] left-[742px] object-cover"
            alt="Picture"
            src="images/picture1-1.png"
          />
        </div>
      </div>
    </div>
  );
};


// import React from "react";

// export const WelcomePage = () => {
//   return (
//     <div className="bg-[#0d0d0d] min-h-screen flex flex-col items-center">
//       <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
//         <header className="py-6 flex justify-between items-center">
//           <img className="w-32 sm:w-44" alt="Logo" src="images/group-3.png" />
//           <nav className="hidden md:flex space-x-8">
//             <a href="#" className="text-white text-lg">Home</a>
//             <a href="#" className="text-white text-lg">Features</a>
//             <a href="#" className="text-white text-lg">Plans & Pricing</a>
//           </nav>
//           <button className="bg-[#204773] text-white px-4 py-2 rounded-lg">Contact</button>
//         </header>

//         <main className="mt-12 sm:mt-20">
//           <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-center leading-tight">
//             <span className="text-[#b4f2f7]">Supercharge Your </span>
//             <span className="text-[#edf7b4]">SaaS</span>
//             <span className="text-[#b4f2f7]"> </span>
//             <span className="text-[#1c743f]">Works</span>
//             <span className="text-[#b4f2f7]">.</span>
//           </h1>

//           <p className="mt-6 text-white text-center text-xl max-w-3xl mx-auto">
//             Quixflow supercharges your SaaS productivity using Agile Loop AI
//             <br />
//             <span className="text-[#526e8c]">Reduce Your Mundane Tasks, Focus On What Matters.</span>
//           </p>

//           <div className="mt-12 flex justify-center">
//             <img className="w-64 sm:w-96" alt="CTA Button" src="images/group-2.png" />
//           </div>

//           <div className="mt-16 text-center">
//             <p className="text-white text-2xl font-semibold">Powered by</p>
//             <img className="mt-4 mx-auto w-40 sm:w-56" alt="Partner Logo" src="images/picture1-1.png" />
//           </div>

//           <div className="mt-20 relative">
//             <div className="bg-[#191919] rounded-lg shadow-lg overflow-hidden">
//               <img
//                 className="w-full h-auto"
//                 alt="Dashboard quixflow"
//                 src="images/dashboard-quixflow-1.png"
//               />
//             </div>
//           </div>
//         </main>

//         <footer className="mt-20 py-8">
//           <img
//             className="w-full max-w-4xl mx-auto"
//             alt="Footer logos"
//             src="images/mask-group.svg"
//           />
//         </footer>
//       </div>
//     </div>
//   );
// };