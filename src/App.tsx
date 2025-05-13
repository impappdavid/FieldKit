"use client";
import './App.css'
import { cn } from "@/lib/utils";
import { DotPattern } from "./components/magicui/dot-pattern";
import Sidebar from './components/myComponents/sidebar';
function App() {

  return (
    <>
      <div className="relative flex h-screen w-full  rounded-lg bg-background p-4">
        
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] z-1",
          )}
        />
        <Sidebar />
      </div>
    </>
  )
}

export default App
