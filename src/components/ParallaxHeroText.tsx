import React from "react";
import WaitlistForm from "./WaitlistForm";

const STRINGS = [
  "",
  "",
  "Find Hidden Tech Talent",
  "Perfect Fit. Every Time."
];

const colors = [
  "from-blue-600 to-green-500",
  "from-green-600 to-blue-500"
];

export default function ParallaxHeroText() {
  return (
    <div className="relative w-full flex flex-col items-center min-h-[380px] select-none py-20 overflow-hidden bg-white">
     

      {STRINGS.slice(2).map((str, idx) => (
        <span
          key={str}
          className={`
            text-4xl sm:text-5xl md:text-7xl font-bold mb-4
            bg-gradient-to-r ${colors[idx % colors.length]} bg-clip-text text-transparent
            px-3 py-3
            break-words whitespace-normal text-center block w-full 
            overflow-visible leading-tight
          `}
        >
          {str}
        </span>
      ))}
      
      {/* Email waitlist input area */}
      <div className="mt-20 w-full max-w-md">
        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4 text-center">
          Join the Waitlist
        </h3>
        <WaitlistForm />
      </div>
    </div>
  );
}
