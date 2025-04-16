import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      {/* Outer glow wrapper */}
      <div className="relative rounded-full p-2 bg-gradient-to-br from-[#9372cb] via-white/10 to-lightOrange shadow-[0_0_20px_#8245ec]">
        {/* Inner image */}
        <img
          src="/images/kam-pic.png"
          alt="Kamran"
          className="rounded-full max-h-[450px] w-auto object-cover shadow-[0_0_25px_rgba(255,255,255,0.15)]"
        />
      </div>

      {/* Background spinning hexagon
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-[#8245ec] blur-[3px] opacity-30 animate-[spin_20s_linear_infinite]" />
      </div> */}
    </motion.div>
  );
};

export default HeroPic;
