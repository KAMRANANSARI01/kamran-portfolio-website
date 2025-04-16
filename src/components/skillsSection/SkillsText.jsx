const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-[#8245ec] mb-10">My Skills</h2>
      <p className="text-xl text-center text-white max-w-2xl">
        I work across the full stack using technologies like{" "}
        <span className="font-semibold">HTML, CSS, Tailwind CSS, JavaScript, React.js</span> on the frontend and{" "}
        <span className="font-semibold">Node.js, Express.js, MongoDB, MySQL</span> on the backend. I also work with tools and libraries like{" "}
        <span className="font-semibold">Redux Toolkit, TanStack Query, GitHub</span> for state management and version control, and{" "}
        <span className="font-semibold">FileZilla</span> for deployment tasks. Currently exploring{" "}
        <span className="font-semibold">Java and Spring Boot</span> to level up my backend expertise.
      </p>
    </div>
  );
};

export default SkillsText;
