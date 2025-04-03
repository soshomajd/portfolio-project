import WatercolorOverlay from "../components/WaterColorOverlay";

export default function Home() {
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

        <text fontSize="80" fill="black">
          <textPath href="#s-curve" startOffset="1%" textAnchor="start">
            Welcome to my portfolio!
          </textPath>
        </text>
      </svg>

      <div className="absolute top-[260px] left-[250px]">
        <WatercolorOverlay
          imageSrc="/assets/cv-image.png"
          className="rounded-full"
          size="300px"
        />
      </div>
    </div>
  );
}
