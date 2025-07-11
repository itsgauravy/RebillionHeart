// src/components/Title.jsx

import React from 'react';

function Title ({ heading }) {
  return (
    <h1 className="
    md:text-5xl 
    font-extrabold 
    text-left
     text-[color:var(--text)] 
     
     patrick-hand-regular
     fade-in 
     w-full
    tracking-[0.7px]
     " 
     style={{
    fontSize: '22px',
    fontWeight: 900,
    padding: '0px 10px 10px 10px'
  }} >
      {heading} 
    </h1>
  );
};

export default Title;
