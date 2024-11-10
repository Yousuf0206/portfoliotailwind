"use client"
import React, { useRef } from 'react';
import Image from "next/image";
import Contact from "./contact";
import Navbar from "@/components/navbar";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8">
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-center sm:text-left my-8">
          <Image src="/profile2.jpg" alt="profile" width={150} height={150} className="rounded-full" />
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">I am Muhammad Yousuf</h1>
            <p className="text-lg sm:text-xl mt-2">
              I am an enthusiastic web designer who is trying to work on different languages, frameworks, and projects to improve my skills and knowledge.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div ref={aboutRef} className="my-12 w-full sm:w-4/5 lg:max-w-3xl text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold border-b-2 border-gray-200 mb-4">About Me</h2>
          <p className="text-base sm:text-lg">
            I am professionally a chemist, learning new things and exploring new zones and markets in the field of IT. I started this journey through joining the Governor Sindh Initiative program for Generative AI.
          </p>
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="my-12 w-full sm:w-4/5 lg:max-w-3xl text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold border-b-2 border-gray-200 mb-4">Skills</h2>
          <p className="text-base sm:text-lg">HTML, CSS, TypeScript, React.js, Next.js</p>
        </div>

        {/* Contact Section */}
        <div ref={contactRef} className="my-12 w-full sm:w-4/5 lg:max-w-3xl text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold border-b-2 border-gray-200 mb-4">Contact Me</h2>
          <Contact />
        </div>
      </main>
    </div>
  );
}
