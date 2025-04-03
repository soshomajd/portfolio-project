export default function Home() {
  const handleCircleClick = () => {
    // router.push("/projects"); //
  };

  return (
    <div className="relative py-8">
      {/* S-formad text */}
      <svg width="100%" height="500" viewBox="0 0 1000 500">
        <path
          id="s-curve"
          d="M 100,250
             C 350,100 550,400 750,250
             S 1150,400 950,250"
          fill="transparent"
          strokeWidth="1"
        />
        <text fontSize="80" fill="black" fontFamily="NewYork">
          <textPath href="#s-curve" startOffset="1%" textAnchor="start">
            Welcome to my portfolio!
          </textPath>
        </text>
      </svg>

      <div className="absolute top-[260px] left-[250px]">
        <img
          src="/assets/cv-image.png"
          alt="CV Image"
          className="rounded-full w-[300px] h-[300px]"
        />
      </div>

      {/* Connecting line mellan bild och Projects */}
      <svg className="absolute w-full h-full top-0 left-0">
        <path
          d={`
            M 400,560 
            C 500,800 700,700 860,800
            `}
          stroke="gray"
          strokeWidth="1"
          fill="transparent"
        />
      </svg>

      {/* Connecting line mellan projects och about */}
      <svg className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <path
          d={`
      M 860,1100
      C 800,1400 250,1450 490,1600
    `}
          stroke="gray"
          strokeWidth="1"
          fill="transparent"
        />
      </svg>

      {/* Connecting line mellan about och contact */}
      <svg className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <path
          d={`
      M 490,1600
      C 700,1650 650,1950 900,2100
    `}
          stroke="gray"
          strokeWidth="1"
          fill="transparent"
        />
      </svg>

      <section>
        <div
          className="cursor-pointer flex flex-col items-end"
          onClick={handleCircleClick}
        >
          {/* About */}
          <div className="relative w-full h-full mt-16 p-24">
            <div
              className="w-90 h-90 bg-black rounded-full flex justify-center items-center shadow-lg transform transition-all hover:scale-105 ml-170 mt-20 relative"
              id="about-circle"
            >
              <span className="text-white text-xl font-bold">About</span>
              {/* Små bubblor */}
              <div className="absolute w-15 h-15 bg-black rounded-full bottom-2 right-3 pulsing-bubble"></div>
              <div className="absolute w-10 h-10 bg-black rounded-full bottom-4 right-4 pulsing-bubble"></div>
            </div>
          </div>

          {/* Projects */}
          <div className="relative w-full h-full mt-16 p-24">
            <div
              className="w-90 h-90 bg-black rounded-full flex justify-center items-center shadow-lg transform transition-all hover:scale-105 ml-10 mt-5 relative"
              id="project-circle"
            >
              <span className="text-white text-xl font-bold">Projects</span>
              {/* Små bubblor */}
              <div className="absolute w-11 h-11 bg-black rounded-full bottom-3 left-3 pulsing-bubble"></div>
              <div className="absolute w-8 h-8 bg-black rounded-full bottom-2 left-2 pulsing-bubble"></div>
            </div>
          </div>

          {/* Contact */}
          <div className="relative w-full h-full mt-16 p-24">
            <div className="w-90 h-90 bg-black rounded-full flex justify-center items-center shadow-lg transform transition-all hover:scale-105 ml-180 mt-5 relative">
              <span className="text-white text-xl font-bold">Contact</span>
              {/* Små bubblor */}
              <div className="absolute w-10 h-10 bg-black rounded-full top-1 right-1 pulsing-bubble"></div>
              <div className="absolute w-7 h-7 bg-black rounded-full top-3 right-3 pulsing-bubble"></div>
              <div className="absolute w-8 h-8 bg-black rounded-full top-4 right-6 pulsing-bubble"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
