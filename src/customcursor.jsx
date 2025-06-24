import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <>
      <style>{`body { cursor: none; }`}</style>
      <motion.img
        src="../public/pen.png" 
        alt="feather cursor"
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          position: "fixed",
          top: "-1%",
          left: "0%",
          width: "32px",   // Customize size
          height: "32px",
          pointerEvents: "none",
          zIndex: 9999,
        //   transform: "translate(-50%, -50%)", // center align with real cursor
        }}
      />
    </>
  );
};

export default CustomCursor;
