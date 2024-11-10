// import  Contact  from "./contact";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <main>
//         <div className = "flex justify-center"><Image src = "/profile2.jpg" alt="profile" width={200} height={200} /></div>
//         <div className="flex my-1 mx-4"><h1 className="px-12 text-4xl">I am Muhammad Yousuf</h1></div>
//         <p className = " text-2xl"> I am a website designer using UI-UX to fullfil 
//           the requirment of my clients.</p>
//           <div className = "container">
//           <Contact />
//           </div>
//       </main>
//          </div>
//   );
// }
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
      <main className="flex flex-col items-start justify-center min-h-screen">
        {/* Profile Section */}
        <div className="flex items-center space-x-8 text-center my-8">
          <Image src="/profile2.jpg" alt="profile" width={200} height={200} className="rounded-full" />
          <div>
            <h1 className="text-4xl font-bold">I am Muhammad Yousuf</h1>
            <p className="text-2xl mt-2">
              I am an enthusiastic web designer who is trying to work on the different
              languages,frameworks, projects to improve my skills and knowledge.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div ref={aboutRef} className="my-12 w-4/5 max-w-3xl text-center">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200 mb-4">About Me</h2>
          <p>About section content goes here.</p>
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="my-12 w-4/5 max-w-3xl text-center">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200 mb-4">Skills</h2>
          <p>Skills section content goes here.</p>
        </div>

        {/* Contact Section */}
        <div ref={contactRef} className="my-12 w-4/5 max-w-3xl text-center">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200 mb-4">Contact Me</h2>
          <Contact />
        </div>
      </main>
    </div>
  );
}
