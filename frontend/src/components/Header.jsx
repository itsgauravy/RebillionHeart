import React, { useState, useRef, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import '../css/header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
   const menuRef = useRef(null);

  const links = [
    { to: "", label: "Home" },
    { to: "about", label: "About Me" },
    { to: "poetry", label: "Poetry" },
    // { to: "soulprints", label: "Gallery" },
    { to: "books", label: "Books" },
    // { to: "blog", label: "Blog" },
   
    // { to: "/workwithme", label: "Offerings" },
    { to: "soulletter", label: "Newsletter" }, 
    { to: "contact", label: "Contact" },
    
  ];

  const handleMenuToggle = () => setMenuOpen(prev => !prev);
  const handleCloseMenu = () => setMenuOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
     if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="fixed w-full z-50 ">
      <div className="max-w mx-auto flex flex-col items-center justify-center">
        <button className="menubtn font-bold" onClick={handleMenuToggle}>
          ☰
        </button> 
        <h2 className=" text-center  text-[var(--text)]">
          Rebellion Heart
        </h2>

       

        <nav className={`navs tracking-wider text-xs pt-[5px] font-semibold ${menuOpen ? 'open' : ''}`} ref={menuRef}>
        
          <button className="btncross ms-auto" onClick={handleCloseMenu}>X</button>
     <hr />
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={handleCloseMenu}
              className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''} ]`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
