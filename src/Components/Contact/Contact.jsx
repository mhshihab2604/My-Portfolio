import { TypeAnimation } from 'react-type-animation';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { TbBrandInstagram } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  const form = useRef();
  const [modalVisible, setModalVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gjms2dl', 'template_jl5ahgl', form.current, {
        publicKey: 'CFbpeFvJkn7dHY7Hy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setModalVisible(true);  // Show modal on success
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="font-bold leading-tight mb-10">
          <TypeAnimation
            sequence={[
              'Get',
              1000,
              'Get In',
              2000,
              'Get In Touch',
              2000,
            ]}
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <p className="text-lg text-gray-200 mb-8">
          Have any questions or want to work together? Fill out the form below to reach out.
        </p>
        <h1 className='font-bold'>🌐 Social Link:</h1>
        <div className="flex justify-center gap-4 py-2">
            <Link to="https://www.instagram.com/mhshihab2604"><TbBrandInstagram className='text-2xl rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150'></TbBrandInstagram></Link>
            <Link to="https://www.facebook.com/mhshihab2604"><CiFacebook className='text-2xl rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150'></CiFacebook></Link>
            <Link to="https://github.com/mhshihab2604"><FaGithub className='text-2xl rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150'></FaGithub></Link>
        </div>
        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
          <div className="mb-4">
            <label className="block text-start text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">Name</label>
            <input 
              type="text" 
              name="user_name" 
              id="user_name" 
              className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#643484]" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-start text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">Email</label>
            <input 
              type="email" 
              name="user_email" 
              id="user_email" 
              className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#643484]" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-start text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea 
              name="message" 
              id="message" 
              className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#643484]" 
              rows="4" 
              required 
            />
          </div>
          <div>
            <input 
              type="submit" 
              value="Send" 
              className="w-full btn bg-transparent border-[#643484] mt-4 text-black hover:bg-[#643484] hover:text-white px-10 hover:border-none flex items-center justify-center focus:ring-offset-2" 
            />
          </div>
        </form>
      </div>

      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-black">Success!</h2>
            <p className='text-black'>Your message has been sent successfully.</p>
            <button
              onClick={closeModal}
              className="mt-6 px-4 py-2 bg-[#643484] text-white rounded-md hover:bg-[#532c6f]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
