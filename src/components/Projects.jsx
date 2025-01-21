// import React from "react";
// import employeeMSImage from "../assets/employee-ms.png";
// import bookMSImage from "../assets/admin-dashboard.png";
// import clone from "../assets/hotclone.png";
// import vealthx from "../assets/vealthx.png";
// import perfume from "../assets/perfume.png";
// import furniture from "../assets/furniture.png";
// import food from "../assets/food.png";




// const projects = [
//   {
//     id: 1,
//     name: "Smart Hub For Clg Mgmt System",
//     technologies: "MERN Stack",
//     image: employeeMSImage,
//     github: "https://github.com/SAKTHIKOUSIK/Student-Hub-for-college-management/tree/newmain4",
//     livelink: "https://smarthubforcollegemanagementsystem.netlify.app/",
//   },
//   {
//     id: 2,
//     name: "Contact Manager(CRUD)",
//     technologies: "React JS",
//     image: bookMSImage,
//     github: "https://github.com/SAKTHIKOUSIK/Contact_Manager_Application_Using_React",
//   },
//   {
//     id: 3,
//     name: "Disney+Hotstar clone",
//     technologies: "HTML, CSS, JS",
//     image: clone,
//     github: "https://github.com/SAKTHIKOUSIK/HotstarClone",
//     livelink: "https://sakthikousik.github.io/HotstarClone/",

//   },
//   {
//     id: 4,
//     name: "vealthx Landing Page",
//     technologies: "Figma",
//     image: vealthx,
//     livelink: "https://www.figma.com/proto/j36xLlNs2BErCH9aNCAWTg/vealthx-1?page-id=0%3A1&node-id=1-2462&viewport=-271%2C721%2C0.14&t=hfRMZ9oqb3oivv0c-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2462",
//   },
//   {
//     id: 5,
//     name: "Perfume Landing Page",
//     technologies: "Figma",
//     image: perfume,
//     livelink: "https://www.figma.com/proto/G1cQ7ACuStj9qcY4jOPoLt/CPY-Perfume-website?page-id=0%3A1&node-id=1-41&t=SzIPEoKT6vxD5crL-1",
//   },
//   {
//     id: 6,
//     name: "Furniture Landing Page",
//     technologies: "Figma",
//     image: furniture,
//     livelink: "https://www.figma.com/proto/xJkak5QSmrfMUFxlAnhl3f/Furniture_Landingpage?page-id=0%3A1&node-id=2-560&starting-point-node-id=2%3A560&t=8h4PSmzGXVhaUxpW-1",
//   },
//   {
//     id: 7,
//     name: "Food Ordering App",
//     technologies: "Figma",
//     image: food,
//     livelink: "https://www.figma.com/proto/bNP8W85wKDAfV7RsNRyAb6/Food-Ordering-App?page-id=0%3A1&node-id=18-642&p=f&viewport=675%2C252%2C0.3&t=2duWtkTPDRjGwedq-1&scaling=scale-down&content-scaling=fixed",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="bg-black text-white py-20" id="project">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
//             transform transition-transform duration-300 hover:scale-105">
//               <img src={project.image} alt={project.name} className="rounded-lg mb-4 
//               w-full h-48 object-cover" />
//               <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
//               <p className="text-gray-400 mb-4">{project.technologies}</p>
//               <div className="flex space-x-4">
//                 {project.github && (
//                   <a href={project.github} className="inline-block bg-gradient-to-r 
//                   from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
//                   rel="noopener noreferrer">GitHub</a>
//                 )}
//                 {project.figma && (
//                   <a href={project.figma} className="inline-block bg-gradient-to-r 
//                   from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full" target="_blank" 
//                   rel="noopener noreferrer">Figma</a>
//                 )}
//                 {project.livelink && (
//                   <a href={project.livelink} className="inline-block bg-gradient-to-r 
//                   from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full" target="_blank" 
//                   rel="noopener noreferrer">livelink</a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;



import React from "react";
import { motion } from "framer-motion";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";
import clone from "../assets/hotclone.png";
import vealthx from "../assets/vealthx.png";
import perfume from "../assets/perfume.png";
import furniture from "../assets/furniture.png";
import food from "../assets/food.png";

const projects = [
  {
    id: 1,
    name: "Smart Hub For Clg Mgmt System",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "https://github.com/SAKTHIKOUSIK/Student-Hub-for-college-management/tree/newmain4",
    livelink: "https://smarthubforcollegemanagementsystem.netlify.app/",
  },
  {
    id: 2,
    name: "Contact Manager(CRUD)",
    technologies: "React JS",
    image: bookMSImage,
    github: "https://github.com/SAKTHIKOUSIK/Contact_Manager_Application_Using_React",
  },
  {
    id: 3,
    name: "Disney+Hotstar clone",
    technologies: "HTML, CSS, JS",
    image: clone,
    github: "https://github.com/SAKTHIKOUSIK/HotstarClone",
    livelink: "https://sakthikousik.github.io/HotstarClone/",
  },
  {
    id: 4,
    name: "vealthx Landing Page",
    technologies: "Figma",
    image: vealthx,
    livelink: "https://www.figma.com/proto/j36xLlNs2BErCH9aNCAWTg/vealthx-1?page-id=0%3A1&node-id=1-2462&viewport=-271%2C721%2C0.14&t=hfRMZ9oqb3oivv0c-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2462",
  },
  {
    id: 5,
    name: "Perfume Landing Page",
    technologies: "Figma",
    image: perfume,
    livelink: "https://www.figma.com/proto/G1cQ7ACuStj9qcY4jOPoLt/CPY-Perfume-website?page-id=0%3A1&node-id=1-41&t=SzIPEoKT6vxD5crL-1",
  },
  {
    id: 6,
    name: "Furniture Landing Page",
    technologies: "Figma",
    image: furniture,
    livelink: "https://www.figma.com/proto/xJkak5QSmrfMUFxlAnhl3f/Furniture_Landingpage?page-id=0%3A1&node-id=2-560&starting-point-node-id=2%3A560&t=8h4PSmzGXVhaUxpW-1",
  },
  {
    id: 7,
    name: "Food Ordering App",
    technologies: "Figma",
    image: food,
    livelink: "https://www.figma.com/proto/bNP8W85wKDAfV7RsNRyAb6/Food-Ordering-App?page-id=0%3A1&node-id=18-642&p=f&viewport=675%2C252%2C0.3&t=2duWtkTPDRjGwedq-1&scaling=scale-down&content-scaling=fixed",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.livelink && (
                  <a
                    href={project.livelink}
                    className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
