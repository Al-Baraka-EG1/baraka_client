"use client";

import { useEffect, useRef, useState } from "react";

interface TransparentImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

export default function TransparentImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  style = {},
}: TransparentImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;

    const img = new window.Image();
    // Allow reading pixels from cross-origin CDN domains (e.g. Cloudinary)
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const w = img.naturalWidth || width || 200;
      const h = img.naturalHeight || height || 200;

      // Set internal canvas dimensions matching the natural image
      canvas.width = w;
      canvas.height = h;

      // Draw the original image onto the canvas
      ctx.drawImage(img, 0, 0, w, h);

      try {
        // Retrieve pixel data
        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;

        // Strip solid white and fake transparent checkerboard backgrounds
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // 1. Detect pure white / near-white square backgrounds (typically R, G, B > 235)
          const isWhite = r > 232 && g > 232 && b > 232;

          // 2. Detect checkerboard light grey printed grid squares (typically R, G, B ≈ 204 or ≈ 240)
          const isGridGrey = Math.abs(r - 204) < 15 && Math.abs(g - 204) < 15 && Math.abs(b - 204) < 15;
          const isGridLight = Math.abs(r - 240) < 15 && Math.abs(g - 240) < 15 && Math.abs(b - 240) < 15;

          // 3. Detect any printed grid lines where R, G, B are identical or extremely grey
          const isCheckerGrey = Math.abs(r - g) < 2 && Math.abs(g - b) < 2 && r > 180 && r < 248;

          if (isWhite || isGridGrey || isGridLight || isCheckerGrey) {
            // Set alpha channel to 0 (completely transparent)
            data[i + 3] = 0;
          }
        }

        // Draw cleaned pixels back
        ctx.putImageData(imgData, 0, 0);
        setLoaded(true);
      } catch (err) {
        // Fallback for CORS sandbox blocking or security errors
        console.warn("Canvas chroma-key bypass due to CORS or sandbox constraint: ", err);
        setLoaded(true);
      }
    };

    img.onerror = () => {
      setLoaded(true); // Stop loading spinner, fallback to default img tag
    };
  }, [src, width, height]);

  // Handle styles dynamically depending on Next.js "fill" behavior
  const containerStyle: React.CSSProperties = fill
    ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        ...style,
      }
    : {
        position: "relative",
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "auto",
        ...style,
      };

  return (
    <div className={`${className}`} style={containerStyle}>
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none transition-opacity duration-300"
        style={{ opacity: loaded ? 1 : 0 }}
      />
      {/* Fallback original image rendered at low opacity while canvas loads or in case of error */}
      {!loaded && (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain absolute inset-0 pointer-events-none opacity-30 animate-pulse"
        />
      )}
    </div>
  );
}
