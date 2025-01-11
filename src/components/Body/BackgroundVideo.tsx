import React from "react";

interface BackgroundVideoProps {
  src: string;
  poster?: string;
  blurAmount?: number; // Optional blur amount in pixels
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src, poster, blurAmount = 10 }) => {
  return (
    <video
      className={`absolute top-0 left-0 h-full w-full object-cover pointer-events-none`}
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      style={{
        filter: `blur(${blurAmount}px)`, // Apply the blur
        transform: "scale(1.1)", // Slightly scale to hide edges caused by blur
      }}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
