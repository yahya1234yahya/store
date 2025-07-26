'use client';

import { Play } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface HeroVideoProps {
  className?: string;
}

export default function HeroVideo({ className }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);

  const handleLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className={className || "w-full h-64 object-cover"}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleLoadedData}
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play overlay for visual appeal */}

    </div>
  );
}
