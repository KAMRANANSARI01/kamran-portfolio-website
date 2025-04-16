import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ReactTypingEffect from "react-typing-effect";

const HeroText = () => {
  return (
    <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
      {/* Greeting */}
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
      >
        Hi, I am
      </motion.h1>

      {/* Name */}
      <motion.h2
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
      >
        Kamran Ansari
      </motion.h2>

      {/* Typing Effect */}
      <motion.h3
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight"
      >
        <span className="text-white">I am a </span>
        <ReactTypingEffect
          text={[
            "Front-End Developer",
            "React Developer",
            "Full Stack Developer",
            "UI/UX Enthusiast",
            
          ]}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={2000}
          cursorRenderer={(cursor) => (
            <span className="text-[#8245ec]">{cursor}</span>
          )}
        />
      </motion.h3>

      {/* About Me */}
      <motion.p
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base sm:text-lg md:text-xl text-justify text-gray-400 mb-10 mt-8 leading-relaxed"
      >
     with 1.5+ years of experience in building scalable, high-performance web applications. I’ve led and developed multiple industry-level projects—including CRM systems, Student Portals, Document Management Systems, and Alumni Portals—used by 10+ universities and impacting over 8+ lakh users across India. These platforms deliver clean UI, efficient backend logic, and seamless user experiences. Currently, I’m working on a comprehensive HRMS product that integrates all these applications into one powerful system, streamlining business operations and enhancing productivity across teams.
      </motion.p>
    </div>
  );
};

export default HeroText;
