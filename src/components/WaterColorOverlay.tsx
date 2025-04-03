import { useEffect, useRef, useState } from "react";

interface WatercolorOverlayProps {
  imageSrc: string;
  className?: string;
  size?: string;
}

const WatercolorOverlay: React.FC<WatercolorOverlayProps> = ({
  imageSrc,
  className,
  size = "200px",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cleared, setCleared] = useState(false);
  const [eraseCount, setEraseCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const sizeInt = parseInt(size, 10);
    canvas.width = sizeInt;
    canvas.height = sizeInt;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Cirkel
    ctx.beginPath();
    ctx.arc(sizeInt / 2, sizeInt / 2, sizeInt / 2, 0, Math.PI * 2);
    ctx.clip();

    const colors = [
      "rgba(255, 255, 255, 0.8)", // Vit
      "rgba(211, 211, 211, 0.8)", // Ljusgrå
    ];

    // Färgtäcke
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * sizeInt;
      const y = Math.random() * sizeInt;
      const radius = Math.random() * 60 + 40;
      const color = colors[Math.floor(Math.random() * colors.length)];
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.filter = "blur(20px)";
      ctx.fill();
    }

    const erasePaint = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
      setEraseCount((prev) => prev + 1);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      erasePaint(event.clientX - rect.left, event.clientY - rect.top);
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size]);

  useEffect(() => {
    if (eraseCount > 200) {
      setCleared(true);
    }
  }, [eraseCount]);

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <canvas
        ref={canvasRef}
        className={`absolute top-0 left-0 w-full h-full rounded-full transition-opacity duration-500 ${
          cleared ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={imageSrc}
        alt="CV Image"
        className="w-full h-full rounded-full"
      />
    </div>
  );
};

export default WatercolorOverlay;
