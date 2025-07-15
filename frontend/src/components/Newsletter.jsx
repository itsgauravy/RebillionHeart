import React, { useState } from "react";
import Title from '../components/Title';
import "../css/Contact.css";

import { HiOutlineDocumentText } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";

import { FiUnlock } from "react-icons/fi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiMoonClearFill } from "react-icons/ri";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/newsletter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  } catch (err) {
    console.error(err);
    setStatus("error");
  }
};

  const listItems = [
    {
      text: "A new or unreleased poem each month",
      icon: <HiOutlineDocumentText className="text-[#4aa460] w-5 h-5 flex-shrink-0" />,
    },
    {
      text: "Spiritual & seasonal energy reflections",
      icon: <FaLeaf className="text-[#4aa460] w-5 h-5 flex-shrink-0" />,
    },
    {
      text: "First access to offerings, book updates, and audio poems",
      icon: <FiUnlock className="text-[#4aa460] w-5 h-5 flex-shrink-0" />,
    },
    {
      text: "Occasional audio voice notes or meditations",
      icon: <FaMicrophoneAlt className="text-[#4aa460] w-5 h-5 flex-shrink-0" />,
    },
    {
      text: "Invitations to join soul journeys, if you feel called",
      icon: <RiMoonClearFill className="text-[#4aa460] w-5 h-5 flex-shrink-0" />,
    },
  ];

  return (
    <section
      className="container w-full  flex flex-col items-center justify-center px-3"
      style={{ color: "var(--text)" }}
    >
      <Title heading="Newsletter" />

    
      <div className="max-w-2xl text-center mt-2 space-y-8">
        <h2 className="text-3xl font-serif tracking-wide">
          Whispers from the Unwritten Heart
        </h2>
         <div className="max-w-[300px] mx-auto">
      <img src="/perpic/img-newsletter.jpg" alt="" />
     </div>
        <p className="text-lg leading-relaxed font-light" style={{ color: "var(--text2)" }}>
          Not every poem is meant for the public eye. Some are meant for the ones walking beside me — quietly, soulfully, unseen.
          <br />
          <br />
          <span className="italic">
            Whispers from the Unwritten Heart
          </span>
          is my newsletter — a monthly love letter of poems, soul reflections, and behind-the-scenes glimpses into my writing,
          healing, and spiritual path.
          Think of it like a letter from the forest. Or a page from my journal, sent with tenderness and truth.
        </p>

        <hr className="border-t" style={{ borderColor: "var(--accent)" }} />

        <div className="text-left space-y-4">
          <h3 className="text-xl font-medium" style={{ color: "var(--text)" }}>
            When you subscribe, you’ll receive:
          </h3>
          <ul className="space-y-2">
            {listItems.map(({ icon, text }, idx) => (
              <li key={idx} className="flex items-center gap-3" style={{ color: "var(--text2)" }}>
                {icon}
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-t" style={{ borderColor: "var(--accent)" }} />

        <div className="space-y-4" style={{ color: "var(--text)" }}>
          <p className="text-lg">
            Ready to receive poetry in your inbox?
            <br />
            <span className="italic">
              Sign up for Whispers from the Unwritten Heart
            </span>{" "}
            and walk this journey with me — softly, soulfully, slowly.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-6"
            noValidate
          >
            <div className="floating-input w-full max-w-sm relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-style"
                autoComplete="email"
              />
              <label htmlFor="email">Your email address</label>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
             
              className="bg-gradient-to-r from-[#64cf8b] to-[#2daf7d] text-white py-2 px-4 rounded-full shadow-lg hover:scale-105 
            transition-all duration-300 text-sm tracking-wide"
            >
              {status === "loading" ? "Sending..." : "Sign Up"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-sm">
                You're in! A whisper will find you soon ✨
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
