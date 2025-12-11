import React from "react";
import Spotlight from "@/components/ui/Spotlight";

export default function Hero() {
  return (
    <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-dot-white/[0.2] relative overflow-hidden">
      
      <Spotlight
        className="-top-40 left-0 md:left-80 md:-top-20"
        fill="white"
      />
      
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full text-center pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Building the Future of <br /> Organic Fertilizers
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto">
          We combine legacy expertise with modern innovation to deliver trusted solutions since [Year]. 
          Experience quality that speaks for itself.
        </p>
        
        {/* 2. ADDED BUTTONS */}
        <div className="mt-8 flex justify-center gap-4">
             {/* Primary Button */}
             <button className="bg-white text-black rounded-full px-8 py-3 font-bold hover:bg-neutral-200 transition">
                Get Started
             </button>
             
             {/* Secondary Button */}
             <button className="text-white border border-neutral-600 rounded-full px-8 py-3 font-bold hover:bg-neutral-900 transition">
                Contact Sales
             </button>
        </div>
      </div>
    </div>
  );
}