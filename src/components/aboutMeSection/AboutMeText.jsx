import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-[#8356d0] mb-10">About Me</h2>
      <p className="text-xl">
        I’m a passionate <span className="text-[#ccb7ef] font-semibold">Software Developer</span> with a 
        <span className="text-[#ccb7ef] font-semibold"> B.Tech in Computer Science</span>, graduated in 2024. 
        With <span className="text-[#ccb7ef] font-semibold">1.5+ years of hands-on experience</span>, 
        I specialize in both <span className="text-[#ccb7ef] font-semibold">frontend and backend development</span>, 
        bringing full-stack solutions to life. My expertise lies in frontend technologies like 
        <span className="text-[#ccb7ef] font-semibold"> HTML, CSS, Tailwind CSS, JavaScript, and React.js</span>, 
        as well as backend technologies such as 
        <span className="text-[#ccb7ef] font-semibold"> Node.js, Express.js, MongoDB, and MySQL</span>. 
        I’ve successfully built and led 
        <span className="text-[#ccb7ef] font-semibold"> multiple large-scale projects</span> including 
        <span className="text-[#ccb7ef] font-semibold"> CRMs, Student Portals, and Document Management Systems</span>. 
        Currently, I’m expanding my skill set by exploring 
        <span className="text-[#ccb7ef] font-semibold"> Java and Spring Boot</span>, while also working on a 
        <span className="text-[#ccb7ef] font-semibold"> robust HRMS product</span> that unifies all major business 
        applications into one seamless system.
      </p>
      <button className="border border-[#8245ec] rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
