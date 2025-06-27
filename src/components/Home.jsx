import "../css/home.css";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
 const imgRefs = useRef([]);

  useEffect(() => {
    imgRefs.current.forEach((img, i) => {
      if (!img) return;

      gsap.fromTo(
        img,
        { opacity: 0, y: 50, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%", 
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section className="container ">
        <div className="banner flex items-center">
          <div className="textSec w-6/12 p-6 ">
            <h4 className="text-[var(--accent)] leading-normal font-bold">
              <span className="font-extrabold dancing-font text-[var(--text)]">Hello</span> 
            </h4>
            <h5 className="text-[var(--accent)] leading-none ">
              {" "}
              This space is a mirror of the{" "}
              <span className="font-extrabold dancing-font text-[var(--text)]">
                soul
              </span>{" "}
              —
            </h5>
            <p className="text-[var(--accent)] leading-normal ">
              a sanctuary for those journeying through love, loss, healing, and
              remembrance.
            </p>
          </div>
          <div className="imgsec w-6/12 p-6  overflow-hidden">
            <img
             ref={(el) => (imgRefs.current[0] = el)}
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1462903876006-77f6beb241b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              onError={(e) => (e.target.style.display = "none")}
              alt=""
            />
          </div>
        </div>

        <div className="banner2 flex items-center">
          <div className="imgsec w-6/12 p-6  overflow-hidden">
            <img
             ref={(el) => (imgRefs.current[1] = el)}
              className="w-full h-full"
              src="/perpic/img7.jpg"
              alt="nothing"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>

          <div className="textSec w-6/12 p-6 ">
            <p className="text-[var(--accent)] leading-normal ">
              I’m{" "}
              <span className="font-extrabold  dancing-font text-[var(--text)]">
                Jaskaran
              </span>
              — a poet, a seeker, and a soft rebel at heart. I write from
              silence, from ache, from the wild places love has taken me. From
              golden hour trails and waterfall edges… From moss-laced forests to
              sacred mountain paths. From the Earth Chakra sites I’ve walked —
              where my heart met the land and remembered something older than
              pain.
            </p>
          </div>
        </div>

        <div className="banner b3 flex items-center ">
          <div className="textSec w-6/12 p-6   ps-2 ">
            <p className="text-[var(--accent)] leading-loose  ">
              They told me that moving on meant forgetting. That{" "}
              <span className="font-extrabold pspan dancing-font text-[var(--text)]">
                healing
              </span>{" "}
              should be linear. That choosing someone who couldn’t choose you
              back was weakness. But I never followed the{" "}
              <span className="font-extrabold pspan dancing-font text-[var(--text)]">
                rules of love
              </span>
              . I don’t believe healing means erasing. I don’t believe letting
              go means closing the heart. I’ve{" "}
              <span className="font-extrabold pspan dancing-font text-[var(--text)]">
                stayed
              </span>
              . With the grief. With the love. With the truth of it all. On
              forest floors, in misted silence, beneath cascading falls — I let
              the Earth mother me in ways no one else could. Because my healing
              didn’t come from turning away — It came from turning inward. From
              walking further, deeper, softer. From trusting my gut when the
              world said,
              <span className="font-extrabold pspan dancing-font text-[var(--text)]">
                {" "}
                “You should be over this by now.”
              </span>
            </p>
          </div>
          <div className="imgsec w-6/12 p-6  overflow-hidden">
            <img
             ref={(el) => (imgRefs.current[2] = el)}
              className="w-full h-full"
              src="/perpic/IMG_8674.jpg"
              alt=""
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        </div>

        <div className="banner2 b4 flex items-center mt-5 ">
          <div className="imgsec w-6/12 p-6  overflow-hidden">
            <img
             ref={(el) => (imgRefs.current[3] = el)}
              className="w-full h-full"
              src="/perpic/img2.jpg"
              alt="nothing"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>

          <div className="textSec w-6/12 p-6 ">
            <p className="text-[var(--accent)] leading-normal ">
              
              My rebellion is <span className="font-extrabold pspan dancing-font text-[var(--text)]">quiet but holy</span>. <br></br>
               It’s choosing golden light wheneverything feels dark.<br></br> 
               It’s  <span className="font-extrabold pspan dancing-font text-[var(--text)]">crying beside waterfalls</span> instead of<br></br>
               It’s bowing to the wind, the waterfall, my conversations with Kauri trees, my unspoken words - my poems — and
              letting them teach me how to love <span className="font-extrabold pspan dancing-font text-[var(--text)]">unconditionally</span>.<br></br><br></br>
               My words are born from that place:<br></br>
              The space between <span className="font-extrabold pspan dancing-font text-[var(--text)]">surrender and fire</span>.<br></br>
              Between softness and rebellion. <br></br>
              Between a breaking heart — and a soul for you.<br></br>
               <span className="font-extrabold pspan dancing-font text-[var(--text)]">Truths</span> that hold you. And offerings that invite you back
              home — to the land, to the light, to the love that lives inside
              you still. <br></br>
              This is not the healing we were taught.<br></br>
               This is the healing we remember.<br></br>
                The healing that walks barefoot,<span className="font-extrabold pspan dancing-font text-[var(--text)]">cries in golden hour</span> 
              , and trusts the waterfall to carry it all.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
