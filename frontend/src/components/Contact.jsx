import React, { useState } from 'react';
import Title from '../components/Title';
import "../css/Contact.css";
import { FaFeatherAlt, FaHeart, FaBookOpen, FaHandshake, FaCommentDots } from 'react-icons/fa';
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { SiTiktok, SiAlltrails } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    reply: 'Yes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data ready to send to API:", formData);
  };

  return (
    <section className="container mx-auto  flex flex-col items-center ">
      <Title heading="Write to Me" />

      <div className="max-w-3xl w-full text-center mt-6 space-y-10 px-2 animate-fadeIn">
        <p className="text-3xl italic text-[var(--text)]">“Write to me if a poem found you at the right time.”</p>
        <p className="text-base">
          I believe in soul encounters — even through a screen. Whether a poem moved you,
          a memory stirred in your heart, or you’re simply here to say hello — I’d love to hear from you.
        </p>

        <hr className="border-t border-[var(--text)] my-4 w-1/3 mx-auto" />

        <p>This is an open space for connection. You can write to me about:</p>
        <ul className="text-left max-w-lg mx-auto text-sm sm:text-base space-y-3">
          <li className="flex items-center gap-2"><FaFeatherAlt className="text-purple-600" /> A poem that touched you</li>
          <li className="flex items-center gap-2"><FaHeart className="text-pink-500" /> Your own healing or twin flame journey</li>
          <li className="flex items-center gap-2"><FaBookOpen className="text-blue-500" /> Questions about my upcoming book or offerings</li>
          <li className="flex items-center gap-2"><FaHandshake className="text-teal-500" /> Collaborations or media inquiries</li>
          <li className="flex items-center gap-2"><FaCommentDots className="text-gray-600" /> Or just something your soul needs to say</li>
        </ul>

        <p className="text-m text-[var(--text)] mt-4">
          I read every message with care. Please allow a little time — I reply slowly and soulfully, not instantly.
        </p>
      </div>

      <form 
        onSubmit={handleSubmit}
        className="mt-12 w-full max-w-xl space-y-8 animate-fadeIn delay-200"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="floating-input">
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Your Name</label>
          </div>

          <div className="floating-input ">
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Your Email</label>
          </div>
        </div>

        <div className="floating-input ">
          <select 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select a Subject</option>
            <option>Feedback</option>
            <option>Book Inquiry</option>
            <option>Soul Story</option>
            <option>Collaboration</option>
            <option>Other</option>
          </select>
          <label className="select-label ">Subject</label>
        </div>

        <div className="floating-input ">
          <textarea 
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <label>Your Message</label>
        </div>

        <div className="floating-input ">
          <select 
            name="reply"
            value={formData.reply}
            onChange={handleChange}
          >
            <option>Yes</option>
            <option>No</option>
          </select>
          <label className="select-label">Would you like to receive a reply?</label>
        </div>

        <div className="flex justify-center">
          <button 
            type="submit"
            className="bg-gradient-to-r from-[#64cf8b] to-[#2daf7d] text-white py-2 px-2 rounded-full shadow-lg hover:scale-105 
            transition-all duration-300 text-sm tracking-wide"
          >
            ✉️ Whisper to the Wind
          </button>
        </div>
      </form>


      <div className="mt-12 animate-fadeIn delay-500 flex align-middle justify-center gap-6 ">
        <a 
          href="https://instagram.com/Jaskaran.0528" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-grey  hover:text-[#d25050] transition"
        >
          <BsInstagram className="text-xl" />
          
        </a>


  {/* Facebook */}
  <a 
    href="https://facebook.com/jaskaran.gill.3363" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-grey hover:text-[#1877F2] transition"
  >
    <BsFacebook className="text-xl" />
    {/* Facebook */}
  </a>

  {/* TikTok */}
  <a 
    href="https://www.tiktok.com/@Jaskaran.0528" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-grey hover:text-red-600 transition"
  >
    <SiTiktok className="text-xl" />
    {/* TikTok */}
  </a>

  {/* AllTrails */}
  <a 
    href="https://www.alltrails.com/members/jaskaran-gill-12?" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-grey hover:text-[#3B9A4B] transition"
  >
    <SiAlltrails className="text-xl" />
    {/* AllTrails */}
  </a>

  
  <a 
    href="mailto:jaskaran.0528@outlook.com" 
    className="flex items-center gap-2 text-grey hover:text-[#4251b6] transition"
  >
    <HiOutlineMail className="text-xl" />
    {/* Email */}
  </a>
      </div>
    </section>
  );
}

export default Contact;
