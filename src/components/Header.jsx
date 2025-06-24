import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Me" },
    { to: "/poetry", label: "Poetry" },
    { to: "/soulprints", label: "Gallery" },
    { to: "/books", label: "Books" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
    { to: "/workwithme", label: "Offerings" },
    { to: "/soulletter", label: "Newsletter" },
  ];

  const handleMenuToggle = () => setMenuOpen(prev => !prev);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="fixed w-full z-50 px-6 py-4 gap-y-2">
      <div className="max-w mx-auto flex flex-col items-center justify-center">
        <h2 className="text-5xl md:text-6xl font-bold dancing-font tracking-wider text-center py-5 px-5 text-[var(--text)]">
          Rebellion Heart
        </h2>

        {/* ☰ Menu Button */}
        <button className="menubtn text-3xl font-bold" onClick={handleMenuToggle}>
          ☰
        </button>

        {/* Sliding Nav */}
        <nav className={`navs patrick-hand-regular tracking-wider text-xs font-semibold ${menuOpen ? 'open' : ''}`}>
          {/* ❌ Close Button */}
          <button className="btncross" onClick={handleCloseMenu}>X</button>

          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={handleCloseMenu}
              className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
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
