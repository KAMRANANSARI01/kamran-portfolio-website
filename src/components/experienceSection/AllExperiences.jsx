import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Ex-Intern",
    company: "Physics Wallah Pvt. Ltd.",
    date: "07/2023 – 09/2023",
    responsibilities: [
      "Contributed to 'Flixify', a high-impact streaming platform project focused on user engagement and content delivery.",
      "Improved UI engagement by 65% through component-based architecture in ReactJS and Redux.",
      "Reduced backend API call overhead and improved load performance through efficient frontend optimization.",
      "Maintained excellent delivery standards with 100% on-time completion and strong team collaboration across sprints."
    ],
  },
  {
    job: "Intern - Website Design and Development",
    company: "Internship Studio",
    date: "10/2023 – 11/2023",
    responsibilities: [
      "Collaborated with senior developers to build a fully functional e-commerce website using HTML, CSS, JavaScript, and React.js.",
      "Implemented responsive UI components, ensuring a smooth user experience across devices.",
      "Focused on modular code structure and reusable components to enhance scalability.",
      "Received positive feedback for strong debugging skills,and problem-solving during live deployments."
    ],
  },

  {
    job: "Software Engineer",
    company: "SRDT Pvt. Ltd.",
    date: "03/2024 – Present",
    responsibilities: [
      "Led the development of multiple full-stack applications including a CRM System, Student Portal, Document Management System (DMS), Alumni Portal, and HRMS using React.js, Redux Toolkit, Tailwind CSS, Node.js, Express.js, and both MySQL and MongoDB.",
      "Built a custom CRM for Sales Representatives and Managers featuring lead tracking, sales pipeline visualization, and performance dashboards with TanStack Query and Redux for optimized state and server-side data handling.",
      "Developed a Student Portal allowing users to upload academic documents, make online payments, and submit inquiries, integrating Razorpay for secure transactions and role-based access controls.",
      "Engineered a Document Management System (DMS) for streamlined document uploads, approvals, and tracking with robust backend logic and seamless file handling APIs.",
      "Collaborated on the Alumni Portal and HRMS to manage alumni engagement, employee records, and attendance workflows, ensuring clean UI/UX and responsive design across all platforms.",
    ],
  },
  
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
