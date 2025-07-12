import Title from '../components/Title';


import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles } from 'lucide-react';
import "../css/Books.css";

function Books() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-heading', {
        y: -50,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
        
      });
      gsap.from('.poem-float', {
        y: 10,
        opacity: 0,
        duration: 1.2,
        delay: 1,
        stagger: 0.3,
        ease: 'power2.out'
        
      });
      gsap.from('.poem-line', {
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.25,
  delay: 1,
  ease: 'power3.out'
});
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
     <section className="container w-full  min-h-[100vh-11.5em]">
            <Title heading="Books" />  
    <div ref={containerRef} className=" bg-[var(--bg)] text-[var(--text)] w-[75%] bookWr py-[20px] mx-auto relative overflow-hidden">
     

      <div className="max-w-[95%] mx-auto text-center mb-20 ">
        <span className="inline-block animate-pulse">
            <Sparkles className="inline w-8 h-8 text-[var(--text)] mb-2" />
          </span>
        <h2 className="hero-heading text-[35px] w-max mx-auto px-[20px] my-[10px] font-bold tracking-tight bg-[var(--text)] leading-tight text-[var(--bg)]">
          The Unwritten Heart
        </h2>
        <p className="text-xl italic mt-4 text-[var(--text2)]">
          A journey through love, loss, and becoming
        </p>
      </div>

      
      <section className="max-w-2xl mx-auto text-center space-y-4 my-[40px]">
        <p className="poem-float text-lg md:text-xl leading-relaxed">
          What if healing didn’t mean forgetting?<br />
          What if your deepest heartbreak was also your most sacred initiation?
        </p>
        <p className="poem-float text-[var(--text2)]">
          <strong>Echoes of a Love I Couldn’t Hold</strong> is my first book from <em>The Unwritten Heart</em> series <br />  — a raw, soul-lit journal through silence and surrender.
        </p>
        <p className="poem-float text-md">This isn’t just poetry. This is memory alchemized.</p>
      </section>

      {/* Section Grid Layout */}
      <div className="flex  gap-[20px] w-full mx-auto justify-center abtSecUn">
        {/* About */}
        <section className="w-[40%] ">
          <h2 className="text-[20px] mb-[20px] font-[800] text-[var(--text)]">About the Series</h2>
          <p><em>The Unwritten Heart</em> is an 8-part poetic journey across heartbreak, rebirth, and soul evolution — each book a season of becoming.</p>
          <p><strong>Book One</strong> explores the beauty and ache of falling in love at 40, staying when the other left, and meeting yourself in the silence.</p>
        </section>

        <section className="border-l-4 pl-6 border-[var(--text2)] italic w-[25%] text-[var(--text2)] ps-[20px]">
          <h3 className="text-[20px] font-[800] text-[var(--text)] mb-[10px]">Unspoken</h3>
          <p className='poem-line'>
            I never told you<br />
            what your silence did to me.<br />
            But I wrote it down<br />
            a hundred different ways —<br />
            hoping one day,<br />
            you’d hear it<br />
            anyway.
          </p>
        </section>
      </div>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto text-center mt-[5vh]">
        <h3 className="text-[22px] text-[var(--accent)] font-[600] mb-[20px]">Release Timeline</h3>
        <p><strong>Soft Launch:</strong> October 2025</p>
        <p className="text-[var(--text2)]">Digital, print & audio formats will available (early next year)</p>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto text-center mt-20">
        <h4 className="text-xl font-semibold mb-2 text-[var(--accent)]">Be the First to Know</h4>
        <p className="text-[var(--text2)] mb-6">
          <button className='underline text[--text] font-[850] cursor-pointer' >Sign up</button> for <em>Rebel Soul Letters</em> for early preorder links, behind-the-scenes updates, and a free audio poem.
        </p>
        <button className=" @apply flex 
        items-center
         justify-center 
         gap-2.5 
         text-[13px]
          font-[650] 
          uppercase 
          tracking-[0.4px]
           text-[--accent]
            bg-[--bg] 
            translate-x-0 
            cursor-pointer
            translate-y-0 
            rotate-0 
            transition-[0.2s] 
            shadow-[-4px_-2px_16px_0px_#ffffff,4px_2px_16px_0px_rgb(95_157_231_/_48%)]
             pl-7 pr-6 py-[10px] px-[10px]
             mx-auto
             mt-[15px]
             rounded-[40px_40px_40px_40px] 
             border-solid 
             border-1
              border-[var(--text)]
               hover:text-[--text2]
                hover:bg-[#e5f5ec] 
                hover:shadow-[-2px_-1px_8px_0px_#ffffff,2px_1px_8px_0px_rgb(95_157_231_/_48%)]
                 active:shadow-none;
  ">
          Join the Waitlist
        </button>
      </section>
    </div>

    </section>
  );
};

export default Books;
