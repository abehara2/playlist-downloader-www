"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showPill, setShowPill] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-start space-y-6 w-full max-w-4xl px-8">
        {/* Photo */}
        <div 
          className="w-full relative group cursor-pointer"
          onMouseEnter={() => setShowPill(true)}
          onMouseLeave={() => setShowPill(false)}
          onClick={() => setShowPill(!showPill)}
        >
          <Image
            src="/photo.png"
            alt="Profile photo"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg object-cover"
          />
          
          {/* Pill overlay */}
          <div className={`absolute bottom-3 left-3 transition-all duration-200 ${
            showPill ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}>
            <a 
              href="https://www.ashankbehara.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full hover:bg-black/90 transition-all duration-200 flex items-center gap-1.5"
              onClick={(e) => e.stopPropagation()}
            >
              www.ashankbehara.com
              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-gray-500 text-md">
          Download public spotify playlists in mp3 format. Free and unlimited forever.
        </h1>
        
        {/* Download Button */}
        <button className="flex cursor-pointer items-center gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200">
          {/* Apple Logo SVG */}
          <svg 
            className="w-5 h-5 fill-current" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download
        </button>
      </div>
    </div>
  );
}
