import React, { useEffect, useRef, useState } from "react";

// const images = [
//   "https://images.unsplash.com/photo-1533903347993-698dee812c2a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0",
//   "https://images.unsplash.com/photo-1531072901881-d644216d4bf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
//   "https://images.unsplash.com/photo-1608610025929-c9f376a28c04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
//   "https://images.unsplash.com/photo-1722285263109-f65996636f8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
// ];
const images = [
  "/perpic/bann-1.jpg",
   "/perpic/IMG_5042.jpeg",
    "/perpic/bann-2.jpg",
     "/perpic/bann-3.jpg"
];



const ImageCarousel = () => {
  const [index, setIndex] = useState(1); // Start from 1 (first real slide)
  const containerRef = useRef(null);
  const total = images.length;
  const allSlides = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    container.style.transition = "transform 0.7s ease-in-out";
    container.style.transform = `translateX(-${index * 100}%)`;

    if (index === total + 1) {
      // Clone to first transition ended
      const handle = setTimeout(() => {
        container.style.transition = "none";
        requestAnimationFrame(() => {
          container.style.transform = `translateX(-100%)`; // Reset to real first image
          setIndex(1);
        });
      }, 700); // Match with transition duration
      return () => clearTimeout(handle);
    }
  }, [index, total]);

  return (
    <div
  ref={containerRef}
  className="flex transition-transform duration-700 ease-in-out w-full h-full"
  style={{
    width: `${allSlides.length * 100}%`,
  }}
>
  {allSlides.map((src, idx) => (
    <div
      key={idx}
      className="w-full  flex-shrink-0 flex justify-center items-center"
      style={{ flex: '0 0 100%' }} // This ensures each slide takes full viewport width
    >
      <img
        src={src}
        alt={`Slide ${idx}`}
        className="w-full h-full object-cover"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  ))}
</div>

  );
};

export default ImageCarousel;
