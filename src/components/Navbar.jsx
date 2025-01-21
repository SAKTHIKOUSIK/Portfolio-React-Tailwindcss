// import React, { useState } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi'; // Import icons from react-icons

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLinkClick = () => {
//     setIsOpen(false); // Close the menu when a link is clicked
//   };

//   return (
//     <nav className='bg-black text-white px-8 md:px-16 lg:px-24 fixed top-0 left-0 w-full z-50 '>
//       <div className='container py-2 flex justify-between items-center'>
//         <div className='text-2xl font-bold'>Sakthi Kousik</div>
//         <div className='md:hidden' onClick={toggleMenu}>
//           {isOpen ? <FiX size={24} /> : <FiMenu size={24} />} {/* Toggle between icons */}
//         </div>
//         <div className='hidden md:flex space-x-6'>
//           <a href="#home" className='hover:text-gray-400'>Home</a>
//           <a href="#about" className='hover:text-gray-400'>About Me</a>
//           <a href="#service" className='hover:text-gray-400'>Experience</a>
//           <a href="#project" className='hover:text-gray-400'>Projects</a>
//           <a href="#contact" className='hover:text-gray-400'>Contact</a>
//         </div>
//         <a href="#contact" className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
//         transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
//           Connect Me
//         </a>
//       </div>
//       {/* Mobile menu */}
//       <div className={`fixed top-0 right-0 h-full w-2/3 bg-black text-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-30`}>
//         <div className='flex justify-end p-4'>
//           <FiX size={24} onClick={toggleMenu} />
//         </div>
//         <div className='flex flex-col items-center space-y-6 mt-10'>
//           <a href="#home" className='hover:text-gray-400' onClick={handleLinkClick}>Home</a>
//           <a href="#about" className='hover:text-gray-400' onClick={handleLinkClick}>About Me</a>
//           <a href="#service" className='hover:text-gray-400' onClick={handleLinkClick}>Experience</a>
//           <a href="#project" className='hover:text-gray-400' onClick={handleLinkClick}>Projects</a>
//           <a href="#contact" className='hover:text-gray-400' onClick={handleLinkClick}>Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className='bg-black text-white px-8 md:px-16 lg:px-24 fixed top-0 left-0 w-full z-50'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 75, duration: 0.5 }}
    >
      <div className='container py-2 flex justify-between items-center'>
        <div className='text-2xl font-bold'>Sakthi Kousik</div>
        <div className='md:hidden' onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
        <div className='hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Experience</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <a href="#contact" className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Connect Me
        </a>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-2/3 bg-black text-white md:hidden z-30`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <div className='flex justify-end p-4'>
          <FiX size={24} onClick={toggleMenu} />
        </div>
        <motion.div
          className='flex flex-col items-center space-y-6 mt-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <motion.a href="#home" className='hover:text-gray-400' onClick={handleLinkClick}
            whileHover={{ scale: 1.1 }}
          >
            Home
          </motion.a>
          <motion.a href="#about" className='hover:text-gray-400' onClick={handleLinkClick}
            whileHover={{ scale: 1.1 }}
          >
            About Me
          </motion.a>
          <motion.a href="#service" className='hover:text-gray-400' onClick={handleLinkClick}
            whileHover={{ scale: 1.1 }}
          >
            Experience
          </motion.a>
          <motion.a href="#project" className='hover:text-gray-400' onClick={handleLinkClick}
            whileHover={{ scale: 1.1 }}
          >
            Projects
          </motion.a>
          <motion.a href="#contact" className='hover:text-gray-400' onClick={handleLinkClick}
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
