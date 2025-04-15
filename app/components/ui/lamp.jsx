"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: -120 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            My Skill Set
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className
}) => {
  return (
    <div
      className={cn(
        "relative flex h-auto min-h-screen flex-col items-center justify-center overflow-hidden bg-[#18181B] w-full rounded-md z-0",
        className
      )}>
      <div
        className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        
        
        <div
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[9rem] rounded-full bg-gray-400 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[11rem] rounded-full bg-gray-400 blur-2xl"></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[12rem] bg-gray-500 "></motion.div>

        <div
          className="absolute inset-auto z-40 h-44 w-full -translate-y-[17.5rem] bg-[#18181B] "></div>
      </div>
      <div className="relative z-50 w-full flex -translate-y-[55vh] flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
