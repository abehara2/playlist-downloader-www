"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { track } from "@vercel/analytics";
import { FaApple } from "react-icons/fa";

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
          Download public spotify & soundcloud playlists in mp3 format. Free and unlimited forever.
        </h1>
        
        {/* Download Button */}
        <Button 
          asChild
          size="lg"
          className="rounded-full"
        >
          <a 
            href="https://www.dropbox.com/scl/fi/ui01hzau76d3zcyg1q5xb/Playlist-Downloader-Mac-0.0.0-Installer.dmg?rlkey=dsp2xrrke0tueivr1ltkbduvo&st=8hxa7oz0&dl=1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('download_clicked', { 
              version: '0.0.0'
            })}
          >
            <FaApple className="w-4 h-4" />
            Download
          </a>
        </Button>
      </div>
    </div>
  );
}
