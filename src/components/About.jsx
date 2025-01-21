// import React from "react";
// import AboutImage from "../assets/aboutme-image.png";

// const About = () => {
//   return (
//     <div className="bg-black text-white py-20" id="about">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
//         <div className="flex flex-col md:flex-row items-center md:space-x-12">
//           <img
//             src={AboutImage}
//             alt="About Me"
//             className="w-72 h-80 rounded object-cover mb-8 md:mb-0 mx-auto md:mx-0"
//           />
//           <div className="flex-1">
//             <p className="text-lg md:text-xl mb-8 text-justify">
//               I am passionate about Frontend Development and UI/UX Design. I specialize in creating user-friendly, aesthetically pleasing digital experiences. With a strong foundation in computer science principles and a keen eye for design, I strive to bridge the gap between functionality and visual appeal in web applications.
//             </p>

//             <div className="space-y-4">
//               {/* Languages Section */}
//               <div className="mb-4">
//                 <span className="mr-4 font-semibold">Languages:</span>
//                 <span className="hover:text-green-400 transform transition-all duration-300">Python, </span>
//                 <span className="hover:text-green-400 transform transition-all duration-300">HTML, </span>
//                 <span className="hover:text-green-400 transform transition-all duration-300">CSS, </span>
//                 <span className="hover:text-green-400 transform transition-all duration-300">JavaScript</span>
//               </div>

//               {/* Technologies/Frameworks Section */}
//               <div className="mb-4">
//                 <span className="mr-4 font-semibold">Technologies/Frameworks:</span>
//                 <span className="hover:text-green-400 transform transition-all duration-300">React.js, </span>
//                 <span className="hover:text-green-400 transform transition-all duration-300">Node.js, </span>
//                 <span className="hover:text-green-400 transform transition-all duration-300">Tailwind CSS</span>
//               </div>

//               {/* Developer Tools Section */}
//               <div className="mb-4">
//                 <span className="mr-4 font-semibold">Developer Tools:</span>
//                 <span className="hover:text-green-400 transform transition-all duration-300">GitHub, </span>
//                 <span className="hover:text-green-400 transform transition-all duration-300">Git, </span>
//                 <span className="hover:text-green-400 transform transition-all duration-300">VS Code</span>
//               </div>

//               {/* Designer Tools Section */}
//               <div className="mb-4">
//                 <span className="mr-4 font-semibold">Designer Tools:</span>
//                 <span className="hover:text-green-400 transform transition-all duration-300">Figma, </span>
//                 <span className="hover:text-green-400 transform transition-all duration-300">FigJam, </span>
//                 <span className="hover:text-green-400 transform transition-all duration-300">Canva</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <motion.img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0 mx-auto md:mx-0"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }} // Animation happens once when in view
          />
          <motion.div
            className="flex-1"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }} // Animation happens once when in view
          >
            <p className="text-lg md:text-xl mb-8 text-justify">
              I am passionate about Frontend Development and UI/UX Design. I specialize in creating user-friendly, aesthetically pleasing digital experiences. With a strong foundation in computer science principles and a keen eye for design, I strive to bridge the gap between functionality and visual appeal in web applications.
            </p>

            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ staggerChildren: 0.2 }}
            >
              {/* Languages Section */}
              <motion.div className="mb-4" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <span className="mr-4 font-semibold">Languages:</span>
                <span className="hover:text-green-400 transition-all duration-300">Python, </span>
                <span className="hover:text-green-400 transition-all duration-300">HTML, </span>
                <span className="hover:text-green-400 transition-all duration-300">CSS, </span>
                <span className="hover:text-green-400 transition-all duration-300">JavaScript</span>
              </motion.div>

              {/* Technologies/Frameworks Section */}
              <motion.div className="mb-4" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <span className="mr-4 font-semibold">Technologies/Frameworks:</span>
                <span className="hover:text-green-400 transition-all duration-300">React.js, </span>
                <span className="hover:text-green-400 transition-all duration-300">Node.js, </span>
                <span className="hover:text-green-400 transition-all duration-300">Tailwind CSS</span>
              </motion.div>

              {/* Developer Tools Section */}
              <motion.div className="mb-4" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <span className="mr-4 font-semibold">Developer Tools:</span>
                <span className="hover:text-green-400 transition-all duration-300">GitHub, </span>
                <span className="hover:text-green-400 transition-all duration-300">Git, </span>
                <span className="hover:text-green-400 transition-all duration-300">VS Code</span>
              </motion.div>

              {/* Designer Tools Section */}
              <motion.div className="mb-4" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <span className="mr-4 font-semibold">Designer Tools:</span>
                <span className="hover:text-green-400 transition-all duration-300">Figma, </span>
                <span className="hover:text-green-400 transition-all duration-300">FigJam, </span>
                <span className="hover:text-green-400 transition-all duration-300">Canva</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
