'use client';
import React, { useEffect, useState } from 'react';
// used useState and useEffect to track the scrolling behavier and create a parallax effect
export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section style={{ transform: `translateY(${offsetY * 0.5}px)` }} className="relative bg-hero-pattern bg-cover bg-center bg-fixed bg-[#010521] h-screen flex items-center justify-center overflow-hidden">
      {/* add image fixed at the upper left corner */}
      <img src="/images/subCube.png" alt="hero" className="absolute -top-10 right-16 sm:left-80 w-32 h-32" />
      <div className="z-10 text-white text-center space-y-16">
        <div className="flex flex-col text-5xl font-bold" >
          <p> Welcome To</p>
          <p>The Second Level</p>
          <p>of the process</p>
        </div>
        <div className="text-xl">
          <p>Congratulations on Passing</p> 
          <p> The Screening Interview</p>
        </div>
        <div className="flex justify-center">
          <button className=" border-2 text-xl px-16 py-7">Get Started</button>
        </div>
      </div>
      
      {/* add image fixed in the bottom left corner */}
      <img src="/images/mainCube.png" alt="hero" className="absolute -bottom-9 left-44 sm:left-[60rem]" />
    </section>
  );
}