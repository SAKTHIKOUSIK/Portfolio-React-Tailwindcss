
// import React, { useState } from "react";

// const experiences = [
//   {
//     id: 1,
//     title: "UI/UX Designer",
//     period: "Jan 2024 – Apr 2024",
//     company: "VealthX, Bangalore, Karnataka",
//     description: `
//       • Collaborated closely with stakeholders to align design elements with business goals and user needs, enhancing overall usability and customer satisfaction.\n
//       • Utilized Figma for designing wireframes, prototypes, and interactive user interfaces, contributing to seamless user experiences.\n
//       • Created a website for VealthX, a financial services company specializing in wealth management and recovery of unclaimed assets.
//     `
//   },
//   {
//     id: 2,
//     title: "Web Development and Designing Intern",
//     period: "Aug 2023 – Sep 2023",
//     company: "Oasis Infobyte, New Delhi, Delhi",
//     description: `
//       • Utilized HTML, CSS, and JavaScript to develop and maintain web pages, enhancing the overall user experience.\n
//       • Designed and styled UI components, contributing to a cohesive and visually appealing user interface.\n
//       • Adhered to best practices in web development and design, maintaining clean, efficient, and scalable code.
//     `
//   }
// ];

// const Service = () => {
//   const [expanded, setExpanded] = useState(null);

//   const toggleExpand = (id) => {
//     setExpanded((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className="bg-black text-white py-20" id="service">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
//         <div className="flex flex-wrap justify-center items-stretch gap-8">
//           {experiences.map((experience) => (
//             <div
//               key={experience.id}
//               className="bg-gray-800 flex flex-col px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 max-w-xs w-full"
//             >
//               <h3
//                 className="mt-2 text-2xl font-bold text-transparent bg-clip-text
//                bg-gradient-to-r from-green-400 to-blue-500 text-center"
//               >
//                 {experience.title}
//               </h3>
//               <p className="mt-2 text-gray-300 text-center">{experience.period}</p>
//               <p className="mt-2 text-gray-300 text-center">{experience.company}</p>
//               <div
//                 className={`mt-2 text-gray-300 transition-all duration-300 whitespace-pre-line text-justify ${
//                   expanded === experience.id ? "h-auto" : "h-20 overflow-hidden"
//                 }`}
//               >
//                 {experience.description}
//               </div>
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   toggleExpand(experience.id);
//                 }}
//                 className="mt-4 inline-block text-green-400 hover:text-blue-500 text-center"
//               >
//                 {expanded === experience.id ? "Show Less" : "Read More"}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;


import React, { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "UI/UX Designer",
    period: "Jan 2024 – Apr 2024",
    company: "VealthX, Bangalore, Karnataka",
    description: `
      • Collaborated closely with stakeholders to align design elements with business goals and user needs, enhancing overall usability and customer satisfaction.\n
      • Utilized Figma for designing wireframes, prototypes, and interactive user interfaces, contributing to seamless user experiences.\n
      • Created a website for VealthX, a financial services company specializing in wealth management and recovery of unclaimed assets.
    `
  },
  {
    id: 2,
    title: "Web Development and Designing Intern",
    period: "Aug 2023 – Sep 2023",
    company: "Oasis Infobyte, New Delhi, Delhi",
    description: `
      • Utilized HTML, CSS, and JavaScript to develop and maintain web pages, enhancing the overall user experience.\n
      • Designed and styled UI components, contributing to a cohesive and visually appealing user interface.\n
      • Adhered to best practices in web development and design, maintaining clean, efficient, and scalable code.
    `
  }
];

const Service = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
        <motion.div
          className="flex flex-wrap justify-center items-stretch gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              className="bg-gray-800 flex flex-col px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 max-w-xs w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text
               bg-gradient-to-r from-green-400 to-blue-500 text-center"
              >
                {experience.title}
              </h3>
              <p className="mt-2 text-gray-300 text-center">{experience.period}</p>
              <p className="mt-2 text-gray-300 text-center">{experience.company}</p>
              <div
                className={`mt-2 text-gray-300 transition-all duration-300 whitespace-pre-line text-justify ${
                  expanded === experience.id ? "h-auto" : "h-20 overflow-hidden"
                }`}
              >
                {experience.description}
              </div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleExpand(experience.id);
                }}
                className="mt-4 inline-block text-green-400 hover:text-blue-500 text-center"
              >
                {expanded === experience.id ? "Show Less" : "Read More"}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
