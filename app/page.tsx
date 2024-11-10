import  Contact  from "./contact";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className = "flex justify-center"><Image src = "/profile2.jpg" alt="profile" width={200} height={200} /></div>
        <div className="flex my-1 mx-4"><h1 className="px-12 text-4xl">I am Muhammad Yousuf</h1></div>
        <p className = " text-2xl"> I am a website designer using UI-UX to fullfil 
          the requirment of my clients.</p>
          <div className = "container">
          <Contact />
          </div>
      </main>
         </div>
  );
}
