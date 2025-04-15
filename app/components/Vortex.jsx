import React from "react";
import { Vortex } from "./ui/vortex";
import { motion } from "motion/react";

export function VortexDemo() {
  return (
    <div
      className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[44rem] overflow-hidden">
      <Vortex
        className="flex items-center bg-transparent flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}>

          <div className="w-full h-full flex items-center justify-center gap-2">
            <form className="flex flex-col items-center text-sm">
              <p className="text-lg text-blue-600 font-medium pb-2">Contact Us</p>
              <h1 className="text-4xl font-semibold text-white pb-4">Get in touch with me</h1>
              <p className="text-sm text-white text-center pb-10">Connect with me on linkedIn and for any business related queries on my email.</p>

              <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full">
                  <label className="text-white" htmlFor="name">Your Name</label>
                  <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
                <div className="w-full">
                  <label className="text-white" htmlFor="name">Your Email</label>
                  <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                </div>
              </div>

              <div className="mt-6 w-[350px] md:w-[700px]">
                <label className="text-white" htmlFor="name">Message</label>
                <textarea className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" required></textarea>
              </div>

              <button type="submit" className="mt-5 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition">Send Message</button>
            </form>
          </div>
        </motion.div>

      </Vortex>
    </div>
  );
}
