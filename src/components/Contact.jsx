import React, { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_crpaeku', 'template_ts1ym8u', form.current, 'VjG22gLlCV-Q_FeL6')
      .then(
        () => {
          setStatusMessage('Message sent successfully!');
        },
        (error) => {
          setStatusMessage('There is some issue, please try again later.');
          console.error('FAILED...', error.text);
        }
      );

    // Optionally reset the form after submission
    e.target.reset();
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>
              Let's Talk
            </h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href="mailto:csesakthikousikr@gmail.com" className='hover:underline'>
                csesakthikousikr@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>+918838390005</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span>2/378, Bharathi Nagar, Bagalur, Hosur, Krishnagiri-635124</span>
            </div>
          </motion.div>

          <motion.div
            className='flex-1 w-full'
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input 
                  type="text" 
                  name="from_name" 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' 
                  placeholder='Enter Your Name' 
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input 
                  type="email" 
                  name="from_email" 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' 
                  placeholder='Enter Your Email' 
                />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea 
                  name="message" 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' 
                  rows="5" 
                  placeholder='Enter Your Message'
                />
              </div>
              <button 
                type="submit" 
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                Send
              </button>
            </form>
            {statusMessage && (
              <p className="mt-4 text-center text-green-400">{statusMessage}</p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;




// import React from 'react';
// import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <div className="bg-black text-white py-20" id="contact">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
//         <div className="flex flex-col items-center justify-center text-center">
//           <div className="flex-1">
//             <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
//               Let's Talk
//             </h3>
//             <p>I'm open to discussing web development projects or partnership opportunities.</p>
//             <div className="mb-4 mt-8">
//               <FaEnvelope className="inline-block text-green-400 mr-2" />
//               <a href="mailto:csesakthikousikr@gmail.com" className="hover:underline">
//                 csesakthikousikr@gmail.com
//               </a>
//             </div>
//             <div className="mb-4">
//               <FaPhone className="inline-block text-green-400 mr-2" />
//               <span>+91 88383 90005</span>
//             </div>
//             <div className="mb-4">
//               <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
//               <span>2/378, Bharathi Nagar, Bagalur, Hosur, Krishnagiri-635124</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;
