
import "../css/Footer.css";

import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';

import { SiTiktok, SiAlltrails } from "react-icons/si";

function Footer () {
  return (
    <footer className="bg-[var(--text)] text-[var(--bg)] static bottom-0  !p-2.5 z-50">
      <div className="max-w-7xl mx-auto align-center flex   justify-between items-center h-full ">
         <p className=" mt-1 pr-6 w-[40%] ">
            © {new Date().getFullYear()} Jaskaran. All rights reserved.
          </p>

        <p>
            Rebillion Heart
        </p>


<div className="flex gap-x-1.5 justify-end w-[40%] socil">
  <a
    href="https://instagram.com/Jaskaran.0528"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[var(--bg)] hover:text-[#E1306C] text-[10px] transition-colors duration-300"
  >
    <FaInstagram className="text-md" />
  </a>

  <a
    href="https://facebook.com/jaskaran.gill.3363"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[var(--bg)] hover:text-[#1877F2] text-[10px] transition-colors duration-300"
  >
    <FaFacebookF className="text-md" />
  </a>

  <a
    href="https://www.tiktok.com/@Jaskaran.0528"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[var(--bg)] hover:text-red-600 text-[10px] transition-colors duration-300"
  >
    <SiTiktok className="text-md" />
  </a>

  <a
    href="https://www.alltrails.com/members/jaskaran-gill-12?"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[var(--bg)] hover:text-[#3B9A4B] text-sm transition-colors duration-300"
  >
    <SiAlltrails className="text-md" />
  </a>

  <a
    href="mailto:jaskaran.0528@outlook.com"
    className="text-[var(--bg)] hover:text-[#D44638] text-sm transition-colors duration-300"
  >
    <FaEnvelope className="text-md" />
  </a>
        </div>

         
      </div>
    </footer>
  );
};

export default Footer;
