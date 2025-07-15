import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Sparkles , X } from 'lucide-react';
import Title from '../components/Title';
import "../css/Books.css";
import axios from "axios";

function Books() {
  const containerRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

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

  
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  if (!email.includes("@")) {
    setStatus("error");
    return;
  }

  try {
    const response = await axios.post("http://localhost:5000/api/waitlist", {
      name,
      email,
    });

    if (response.status === 201) {
      setStatus("success");
      setEmail("");
      setName("");
    }
  } catch (error) {
    if (error.response?.status === 409) {
      setStatus("exists"); // email already exists (if you want this check on backend)
    } else {
      setStatus("error");
    }
  }
};

  return (
    <section className="container w-full min-h-[100vh-11.5em]">
      <Title heading="Books" />
      <div ref={containerRef} className="bg-[var(--bg)] text-[var(--text)] w-[75%] bookWr py-[20px] mx-auto relative overflow-hidden">

        {/* HERO */}
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

        {/* DESCRIPTION */}
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

        {/* GRID */}
        <div className="flex gap-[20px] w-full mx-auto justify-center abtSecUn">
          <section className="w-[40%]">
            <h2 className="text-[20px] mb-[20px] font-[800] text-[var(--text)]">About the Series</h2>
            <p><em>The Unwritten Heart</em> is an 8-part poetic journey across heartbreak, rebirth, and soul evolution — each book a season of becoming.</p>
            <p><strong>Book One</strong> explores the beauty and ache of falling in love at 40, staying when the other left, and meeting yourself in the silence.</p>
          </section>

          <section className="border-l-4 pl-6 border-[var(--text2)] italic w-[25%] text-[var(--text2)]">
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

        {/* TIMELINE */}
        <section className="max-w-4xl mx-auto text-center mt-[5vh]">
          <h3 className="text-[22px] text-[var(--accent)] font-[600] mb-[20px]">Release Timeline</h3>
          <p><strong>Soft Launch:</strong> October 2025</p>
          <p className="text-[var(--text2)]">Digital, print & audio formats will available (early next year)</p>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto text-center mt-20">
          <h4 className="text-xl font-semibold mb-2 text-[var(--accent)]">Be the First to Know</h4>
          <p className="text-[var(--text2)] mb-6">
            <span
              className='underline text-[--text] font-[850] cursor-pointer'
              onClick={() => setShowModal(true)}
            >
              Sign up
            </span> for <em>Rebel Soul Letters</em> for early preorder links, behind-the-scenes updates, and a free audio poem.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center gap-2.5 text-[13px] font-[650] uppercase tracking-[0.4px]
              text-[--accent] bg-[--bg] transition-[0.2s]
              shadow-[-4px_-2px_16px_0px_#ffffff,4px_2px_16px_0px_rgb(95_157_231_/_48%)]
              pl-7 pr-6 py-[10px] px-[10px] mx-auto mt-[15px] rounded-[40px] border border-[var(--text)]
              hover:text-[--text2] hover:bg-[#e5f5ec] hover:shadow-[-2px_-1px_8px_0px_#ffffff,2px_1px_8px_0px_rgb(95_157_231_/_48%)]
              active:shadow-none"
          >
            Join the Waitlist
          </button>
        </section>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md">
           
           <div className="header flex justify-between items-center mb-4">
             <h3 className="text-xl font-semibold ">Join the Waitlist</h3>
             <button
  onClick={() => {
    setShowModal(false);
    setStatus(null);
    setEmail("");
  }}
  className=" text-red-500 hover:text-red-500 transition-colors"
  aria-label="Close"
>
  <X className="w-5 h-5" />
</button>
           </div>

            <form onSubmit={handleSubmit} className="space-y-4">
               <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#64cf8b] to-[#2daf7d] text-white py-2 px-4 rounded-full shadow-md hover:scale-105 transition-all duration-300 text-sm"
              >
                {status === "loading" ? "Submitting..." : "Submit"}
              </button>
              {status === "success" && <p className="text-green-600 text-sm">You're on the list! 🌿</p>}
              {status === "exists" && <p className="text-yellow-600 text-sm">You're already signed up!</p>}
              {status === "error" && <p className="text-red-500 text-sm">Invalid email. Please try again.</p>}
            </form>
           
          </div>
        </div>
      )}
    </section>
  );
}

export default Books;
