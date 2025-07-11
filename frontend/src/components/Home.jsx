import "../css/home.css";
import React, { useEffect, useRef ,useState} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ImageCarousel from "./ImageCarousel";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
 const imgRefs = useRef([]);
 const [showMore, setShowMore] = useState(false);
  const [showMoreB, setShowMoreB] = useState(false);
  const [showMoreL, setShowMoreL] = useState(false);
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
      
        {/* <div className="carousl w-4/5 overflow-hidden relative flex items-center justify-center ">
                   <ImageCarousel />

        </div>  */}

        <div className="banner flex items-center bnr1">
          <div className="textSec w-6/12 p-6 ">
            <h4 className="text-[var(--accent)] leading-normal font-bold">
              <span className="font-extrabold  text-[var(--text)]">Welcome to The Rebellion heart:</span> 
            </h4>
           
            <p className="text-[var(--accent)] leading-normal ">
             Where wild souls remember who they are. <br></br>
A sacred space for the tender, the torn, and the rising. Here poetry meets healing - through words that ache, soften, and set you free. 
            </p>
         {/* <button className="btnhome @apply border border-[color:var(--text)] text-[color:var(--accent)] px-2.5 py-1.5 border-solid;"> Books </button> */}

          </div>
          <div className="imgsec w-6/12 p-6  overflow-hidden">
            <img
             ref={(el) => (imgRefs.current[0] = el)}
              className=" @apply w-[45%] rounded-none bg-center shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px] m-2.5 p-0 h-full "
              src="/perpic/pic 1.jpg"
              onError={(e) => (e.target.style.display = "none")}
              alt=""
            />
          </div>
        </div> 

        <div className="banner2 bnr2 flex items-center relative">
          {/* <div className="imgsec w-full p-6  overflow-hidden"> */}
            <img
             ref={(el) => (imgRefs.current[1] = el)}
              className=" absolute b2fi"
              src="/perpic/Pic 2.jpg"
              alt="nothing"
              onError={(e) => (e.target.style.display = "none")}
            />
             <img
            
              className="@apply absolute  b2Se "
              src="/perpic/Pic 3.jpg"
              alt="nothing"
              onError={(e) => (e.target.style.display = "none")}
            />
          {/* </div> */}

            <div className="textSec p-3 absolute">
      <p className="text-[var(--accent)] leading-normal">
        Haere Mai - I'm
        <span className="font-extrabold text-[var(--text)]">Jaskaran</span> A
        poet, seeker, and a soft rebel at heart.
      </p>

      {showMore && (
        <p className="text-[var(--accent)] leading-normal mt-2">
          I write from silence, emotion, and the wild places love has taken me —
          golden hour trails, waterfalls, forests and mountain peaks. <br />
          I am currently journeying across Earth Chakra sites, where I am
          reconnecting with land and remembering something older than pain — and
          writing from that place within.
        </p>
      )}

      <button
        onClick={() => setShowMore((prev) => !prev)}
        className="btnmore cursor-pointer text-[14px] hover:text-[15px] hover:font-[650] border-b-[color:var(--accent)] border-b px-2.5 py-1.5 border-solid mt-2"
      >
        {showMore ? "View less" : "Know more"}
      </button>
    </div>
        </div>

          <div className="pageBrkrimg @apply w-[85%] p-[5px] mx-auto my-[35px] border-[color:var(--accent)]   max-h-[675px]" >
            <img src="/perpic/Pic 4.jpg" alt="" className="w-full h-full" />
          </div>

        <div className="banner b3 flex items-center ">
          <div className="textSec w-6/12 p-6   ps-2 ">
            <p className="text-[var(--accent)] leading-loose  ">
             <span className="font-extrabold pspan  text-[var(--text)]" style={{paddingLeft:"0"}}>Love, Loss, and Becoming:  </span><br />
They said that choosing someone who didn't choose you back is a weakness. They said moving on means forgetting and that healing is linear - but I stayed with grief, the love and truth 
        
            </p>
 {showMoreB && (
        <p className="text-[var(--accent)] leading-normal mt-2">
     Because I don't see love that way. Healing isn't about erasing, and letting go doesn't mean closing your heart. <br />
My healing didn't come from avoiding pain, or running away from it - but from looking inwards, going deeper, and trusting myself, 
when the world said - "you should be over this by now" 
        </p>
      )}


          <button
        onClick={() => setShowMoreB((prev) => !prev)}
        className="btnmore cursor-pointer text-[14px] hover:text-[15px] hover:font-[650] border-b-[color:var(--accent)] border-b px-2.5 py-1.5 border-solid mt-2"
      >
        {showMoreB ? "View less" : "Explore my healing Journey"}
      </button>

          </div>
          <div className="imgsec w-6/12 p-6  overflow-hidden">
            <img
             ref={(el) => (imgRefs.current[3] = el)}
              className="w-full h-full"
              src="/perpic/pic 5.jpg"
              alt=""
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        </div>

        <div className="banner2 b4 relative flex items-center " style={{margin:"0"}}>
          <div className="imgbl-1 p-6 absolute overflow-hidden">
            <img
             ref={(el) => (imgRefs.current[4] = el)}
              className="w-full h-full"
              src="/perpic/Pic 6.jpg"
              alt="nothing"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>

          <div className="textSec  @apply   backdrop-blur-[8.4px]  p-6  z-[2]  w-[40%] absolute left-[4%] top-[0.5%] ">
            <p className="text-[var(--accent)] leading-normal ">
              
                <span className="   text-[var(--text)]" style={{paddingLeft:"0"}}>Softly defiant. Fiercely true. My heart heals in rhythm with the Earth's chakras.</span> <br />
My rebellion heart is a soft rebel - refusing to Love, Heal, or Become the way this world tells it to! 

            </p>
            {showMoreL && (
        <p className="text-[var(--accent)] leading-normal mt-2">
          My rebellion is quiet but sacred. It's choosing light in the dark. 
          It's crying by the waterfalls instead of holding it all in. 
          It's listening to the wind, the trees, the silence - and letting my poems teach me how to love without conditions. <br />
This isn't the healing that we were taught. It's the healing we remember -
 the kind that walks barefoot; cries listening to the advice of the trees; 
 following the sun in the golden hours; and trusting that waterfalls to carry it all. <br />
Here, you'll find poems that remember for you, trust that holds you, and an invitation to come Home - to the land, the light, and the love within you. 

        </p>
      )}

             <button
             onClick={() => setShowMoreL((prev) => !prev)}
              className="btnmore cursor-pointer text-[14px] hover:text-[15px] hover:font-[650] @apply border-b-[color:var(--accent)] border-b  px-2.5 py-1.5 border-solid mt-2">
                  {showMoreL ? "View less" : "Journey through the untamed heart"}
                  
                  </button>

          </div>

            <div className=" imgbl-2 p-6 absolute overflow-hidden">
            <img
             ref={(el) => (imgRefs.current[5] = el)}
              className="w-full h-full"
              src="/perpic/Pic 7.jpg"
              alt="nothing"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
