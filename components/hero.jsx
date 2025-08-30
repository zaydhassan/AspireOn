"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
            Achieve More with AI-Driven Career
            Success Coaching
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Tailored strategies and simulated experiences to prepare you for real-world success.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button
  size="lg"
  className="relative px-8 py-3 font-semibold rounded-full text-white bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 shadow-lg
    transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl
    before:absolute before:-inset-0.5 before:rounded-full before:bg-gradient-to-r before:from-pink-400 before:via-purple-600 before:to-yellow-300 before:opacity-75
    before:blur-lg before:content-[''] before:z-[-1]"
>
  Get Started
</Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.png"
              width={950}
              height={600}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
