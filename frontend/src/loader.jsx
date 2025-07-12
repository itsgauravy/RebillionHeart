import { useEffect, useRef } from "react";
import { FiFeather } from "react-icons/fi";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const textRef = useRef(null);
  const loaderRef = useRef(null);
  const contentRef = useRef(null);
  const revealRef = useRef(null); // NEW: background reveal layer

  useEffect(() => {
    const timeline = gsap.timeline();

    // Step 1: Animate the typing effect
    timeline.to(textRef.current, {
      width: "20rem",
      duration: 2.5,
      ease: "power2.out",
    });

    // Step 2: Animate background reveal from bottom to top
    timeline.to(
      revealRef.current,
      {
        height: "100%",
        duration: 0.7,
        ease: "power3.inOut",
      },
      "+=0.2"
    );

    // Step 3: Slide loader up off-screen
    timeline.to(
      loaderRef.current,
      {
        y: "-100%",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete,
      },
      "+=0.2"
    );
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed w-full h-full inset-0 bg-[#dffbef] z-[9999] flex items-center justify-center overflow-hidden"
    >
      {/* Content center box */}
      <div
        ref={contentRef}
        className="flex flex-col items-center justify-center z-10"
      >
        <FiFeather className="text-[var(--text)]  mb-4 animate-pulse" />
        <h1
          ref={textRef}
          style={{ fontSize: "2.5rem" }}
          className="text-[var(--text)] font-semibold font-[Dancing_Script] overflow-hidden whitespace-nowrap border-r-[3px] border-[var(--text)] pr-2 w-0 leading-[1.4] pb-1"
        >
          My Rebellion Heart
        </h1>
      </div>

      
    </div>
  );
};

export default Loader;
