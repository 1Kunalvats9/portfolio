"use client";
import { AuroraBackground } from "./components/ui/AuroraBg"
import { motion } from "motion/react";
import { LampDemo } from "./components/ui/lamp";
import { Card } from "./components/ui/card-hover-effect";
import { CardHoverEffectDemo } from "./components/Skills";
import { TimelineDemo } from "./components/TimelineDemo";
import Footer from "./components/Footer";
import { VortexDemo } from "./components/Vortex";
export default function Page() {
  return (
    <div className="w-full">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Hello devs, <br /> I'm Kunal Vats
          </h1>
          <div
            className="font-extralight text-center md:text-3xl text-neutral-200 py-4">
            Future Software Engineer | Rishihood University | Newton School of Technology
          </div>
          
        </motion.div>
      </AuroraBackground>
      <div className="w-full flex flex-col items-center justify-start gap-28 bg-[#18181B]">
        <LampDemo />
      </div>
      <div className="w-full h-[100vh] -mt-[50vh] bg-[#18181B]">
        <CardHoverEffectDemo />
      </div>
      <div className="w-full min-h-screen bg-[#18181B]">
        <TimelineDemo />
      </div>
      <div className="w-full min-h-screen flex items-center justify-center bg-[#000]">
        <VortexDemo />
      </div>
      <Footer />
    </div>
  )
}
