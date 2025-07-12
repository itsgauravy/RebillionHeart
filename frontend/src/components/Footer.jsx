
import "../css/Footer.css";

import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';

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

        <div className="flex @apply gap-x-1.5 justify-end socil w-[40%]">
<a            
         href="https://instagram.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[var(--bg)] hover:text-[#E1306C] text-lg transition-colors duration-300"
>
  <FaInstagram />
</a>

<a
  href="https://facebook.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[var(--bg)] hover:text-[#1877F2] text-lg transition-colors duration-300"
>
  <FaFacebookF />
</a>

{/* <a
  href="https://twitter.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[var(--bg)] hover:text-[#1DA1F2] text-lg transition-colors duration-300"

  {/* <FaTwitter /> *
  
</a> */}

<a
  href="mailto:your@email.com"
  className="text-[var(--bg)] hover:text-[#D44638] text-lg transition-colors duration-300"
>
  <FaEnvelope />
</a>
        </div>

         
      </div>
    </footer>
  );
};

export default Footer;
