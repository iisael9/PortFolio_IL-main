"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-gradient-to-br from-slate-300 to-slate-500 "
      >
      </motion.h1>
    </LampContainer>
  );
}

const Lamp = () => {
  return (
    <div>
      <LampDemo />
    </div>
  )
}

export default Lamp
