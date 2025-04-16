import React from "react";
import { motion } from "framer-motion";

const SubHeroMain = () => {
  const values = ["React Developer", "JavaScript Enthusiast", "Frontend Specialist", "UI/UX Designer", "Software Engineer"];

  return (
    <div className="w-full border-y bg-brown border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4">
      <motion.div
        className="flex gap-16 text-3xl font-extrabold tracking-wide items-center whitespace-nowrap px-4"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        {values.map((val, idx) => (
          <p key={idx} className="mx-8 hover:text-yellow-300 transition-colors duration-300">
          {val}
          </p>
        ))}
      </motion.div>
    </div>
  );
};

export default SubHeroMain;
