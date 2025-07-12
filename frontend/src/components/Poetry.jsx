import Title from "../components/Title";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/Poetry.css";
gsap.registerPlugin(ScrollTrigger);
function Poetry() {
  const containerRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.utils.toArray(".poem-line").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
       opacity: 0,
scale: 0.55,
duration: 1.2,
ease: "power2.out"

      });
    });
  }, containerRef);

  return () => ctx.revert();
}, []);

useEffect(() => {
  const ctx = gsap.context(() => {
    // Animate each image with .poem-img
    gsap.utils.toArray(".poem-img").forEach((img) => {
      gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: "top 80%", // triggers when image reaches 85% of viewport
          toggleActions: "play none none reverse",
        },
        y: 100,               // animate from below
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
      });
    });
  }, containerRef);

  return () => ctx.revert();
}, []);


  return (

    <section className="container  min-h-[calc(100vh-10.5rem)]  " ref={containerRef} >
      <Title heading="Poetry - The Unwritten Heart Collection" />

      <div className="poetry w-full   ">
        <div className="potChilds w-full relative">
          <div className="flowerim absolute w-[22%]  left-[4%] top-[6%]">
            <img src="/perpic/lineart1.png" alt="" />
          </div>
          {/* <div className="poetimgis absolute w-[22%] top-[20%] right-[2%] flex-wrap flex ">
                    <img src="/perpic/Poet-1.jpg" alt="" className='w-[75%] rounded-[30px] opacity-[75%] '/> 
                    
                </div> */}

          <h2 className="@apply w-1/3 mx-auto text-left text-[1.5rem] poh2 text-[color:var(--text)] leading-none mb-[20px]">
            A Living Archive
          </h2>
          <p className="poem-line text-[color:var(--text2)] text-left w-1/3 poep mx-auto">
            These poems were never meant to impress —<br />
            they were meant to feel. <br /> <br />
            The Unwritten Heart is a living, breathing collection —<br />
            a sacred archive of words I once couldn’t say out loud. <br />
            <br />
            It’s where I process love, loss, memory, and the wild, spiritual
            path of becoming. <br />
            I write for the soul that stays soft through storms. <br />I write
            for the heart that remembers — even when it aches.
          </p>
        </div>
        <div className="potChilds w-full relative">
        
          <div className="flowerim absolute w-[22%] top-[20%] right-[2%] flex-wrap flex ">
            <img
              src="/perpic/lineart3.png"
              alt=""
              className="rounded-[20px] opacity-[75%] "
            />
          </div>

          <h2
            className="@apply w-1/3 
              text-center 
              poh2
               mx-auto 
               text-[1.5rem] 
               text-[color:var(--text)] 
               leading-none 
               mb-[20px] 
               mt-[30px]"
          >
            - About the Series -
          </h2>
          <p className="poem-line text-[color:var(--text2)] text-center w-1/3 poep mx-auto">
            The Unwritten Heart is a powerful 8-part poetic series exploring the
            depths of love, loss, and becoming. <br />
            <br />
            Each part is a book — a season of soul — written through silence,
            heartbreak, and revelation. <br /> <br />
            The series begins with Echoes of a Love I Couldn’t Hold — a raw
            collection of poems
            <br />
            tracing the journey through longing, denial, fear, and beauty of
            falling in love. <br />
            <br />
            These pieces are intimate, unfiltered, and soul-stirring. <br />
            They tell the untold story of what it means to love deeply.
          </p>
        </div>

        <div className="potChilds w-full relative">
          <div className="flowerim absolute w-[22%]  left-[4%] top-[6%]">
            <img src="/perpic/lineart.png" alt="" />
          </div>
          <div className="poetimgis absolute w-[22%] top-[20%] right-[2%] flex-wrap flex ">
            <img
              src="/perpic/Poet-3.jpg"
              alt=""
              className="w-[75%] rounded-[30px] opacity-[75%] "
            />
          </div>

          <p className="poem-line text-[color:var(--text2)] text-left w-1/3 poep mx-auto mt-[30px]  ">
            These poems were never written to be shared — <br />
            They were written to keep me alive. <br /> <br />
            To hold what I couldn’t say out loud. <br />
            To meet myself in silence. <br />
            To speak the unspeakable, <br />
            and love the unlovable — within me. <br /> <br />
            The Unwritten Heart Collection is not a curated gallery. It’s a
            living archive. <br />
            Each poem is a moment remembered. A feeling transmuted. A truth that
            rose through my body when I had no words for what I was becoming.{" "}
            <br />
            I don’t edit much. I don’t polish. I just listen — <br />
            and let the poem speak when it’s ready.
          </p>
        </div>

        <div className="poems w-[60%] mx-auto">
          <h2
            className="   @apply w-1/3 
                                            text-center 
                                            poh2
                                            mx-auto 
                                            text-[1.5rem] 
                                            text-[color:var(--text)] 
                                            leading-none 
                                            mb-[20px] 
                                            mt-[30px]"
          >
            - Featured Poems -
          </h2>

          <ol className=" list-inside text-[var(--text)]  ">
            <li className="max-w-[50%] relative">
                <img src="/perpic/Poet-3.png" alt="" className="absolute w-[52%] top-[0%] right-[-100%] @apply  poem-img" />
                   <p className="poem-line text-[color:var(--text2)] text-left w-max me-auto">
                If my words still overwhelm you, <br />
                Then I wonder, what will my actions do.. <br />
                What if I tell you - <br />
                I have your name carved on my skin <br />
                and <br />
                our initials tangled up on my neck <br />
                Would all this be overwhelming too..
              </p>
            </li>

            <li className=" w-max ms-auto  my-[12vh] max-w-[50%] relative">
              <img src="/perpic/Poet-5.jpg" alt="" className="absolute w-[80%] top-[-5%] left-[-140%] rounded-[5px] poem-img" />
              <p className="poem-line text-[color:var(--text2)] text-left">
                …and I thought I was slowing erasing you <br />
                not knowing that I was weaving you <br /> <br />
                into my soul <br />
                with every word I wrote!
              </p>
            </li>

            <li className=" w-max me-auto   max-w-[50%] my-[15vh] relative">
              <img src="/perpic/Poet-6.jpg" alt="" className="absolute w-[65%] top-[10%] right-[-200%] rounded-[10px] poem-img" />
              <p className="poem-line text-[color:var(--text2)] text-left my-auto">
                It is hard rewriting you - <br />
                Without falling in love all over again.
              </p>
            </li>

            <li className=" w-max ms-auto max-w-[50%] mt-[6vh] relative">
              <img src="/perpic/Poet-2.jpg" alt="" className="absolute w-[65%] top-[20%] left-[-140%] rounded-[10px] poem-img" />


              <p className="poem-line text-[color:var(--text2)] text-left">
                you were merciless - <br />
                I thought. <br />
                but when I returned <br />
                to read my own journey, <br />
                I saw it clearly: <br />
                the dreams I held so dearly - <br />
                you never dreamed about them. <br /> <br />
                the hope I carried like a prayer - <br />
                you never breathed life into it. <br />
                The love. The ache. The loss - was all mine. <br /> <br />
                This story I have been celebrating <br />
                as if it was ours - <br />
                was always mine. <br />
                Just Mine… <br />
              </p>
            </li>

            <li className=" w-max me-automax-w-[50%]  mt-[6vh] relative">
               <img src="/perpic/Poet-4.jpg" alt="" className="absolute w-[50%] top-[25%] right-[-80%] rounded-[10px] poem-img" />
                <img src="/perpic/extras/ex3.png" alt="" className="absolute w-[50%] top-[30%] right-[-100%] rounded-[10px] poem-img" />
 
              <p className=" poem-line text-[color:var(--text2)] text-left">
                <span className="font-[650] italic">
                  It’s almost been a year —
                </span>{" "}
                <br />
                And your story still lives within me, <br />
                But now I read it from a healing heart without any fear, <br />
                The questions still remain, <br />
                But they no longer hurt anymore <br />
                I have learnt to listen to your silence. <br />
                But it’s almost been a year. <br /> <br />
                It’s been <br />
                A journey through surrender, <br />
                A soft rebellion of the soul, <br />
                A gentle nudge toward acceptance, <br />
                A remembrance that I am still a little lost. <br /> <br />
                It’s almost been a year — <br />
                A year of my inner and earth chakras, <br />
                Of fasting, cold showers, and waterfalls, <br />
                Of golden hour tears and barefoot walks. <br />
                <br />
                It’s been a year <br />
                Of loving you quietly yet without any fear <br />
                Reading all your smiles and little frowns this past year <br />A
                year of sending you all my energy just to feel you near. <br />{" "}
                <br />
                It’s almost been a year — <br />
                Since I bared my soul open to someone, maybe like never before,{" "}
                <br />
                Knowing the answer already deep in my core! <br /> <br />
                It’s almost a year since last July the twenty four..
              </p>
            </li>

            <li className=" w-max ms-auto max-w-[50%] my-[10vh] relative">
              <img src="/perpic/Poet-7.jpg" alt="" className="absolute w-[60%] top-[2%] left-[-85%] rounded-[10px]  poem-img" />

              <p className="poem-line text-[color:var(--text2)] text-left">
                Why can’t I just go back to summer of 2021 <br />
                When our energies didn’t mess with each other <br />
                When our vibes had no sense of each others being <br />
                When being in the same room, even on the same table meant
                nothing…
                <br />
                When there was no desperation to see you, <br />
                to listen to your soulful laughter or feel your beautiful smile{" "}
                <br />
                When there was no waiting for the Monday mornings or Friday
                meetings! <br />
                Why can’t I just go back to summer of 2021 <br />
                When I was so oblivious of your presence <br />
                When I had no clue of how I would fall in love with you <br />
                Why can’t this be the summer of 2021!!
              </p>
            </li>

            <li className=" w-max me-auto relative">

              <img src="/perpic/Poet-1.png" alt="" className="absolute w-[45%] top-[10%] right-[-100%] rounded-[10px] poem-img" />
             
              <p className="poem-line text-[color:var(--text2)] text-left">
                I know greater the patience, sweeter is the fruit - <br />
                But just so that you know, <br />
                I like my chocolate dark and my coffee without any sugar <br />
                I prefer savoury over sweet any day of the year!! <br />
                Diabetes run in my family; <br />
                So really, <br />
                I don’t mind if you come a little early <br />
                And not be as sweet.
              </p>
            </li>
          </ol>
        </div>
      </div>

      <div className="sneak mt-[50px]">
        <h2 className="text-[color:var(--text)] text-center text-[1.5rem] ">
          Sneak Peek - From the Book:
        </h2>
        <p className="poem-line text-[color:var(--text2)] text-center   mt-[20px]  ">
          <span className="font-[600] italic">
            A quiet preview from my upcoming poetry book, launching <span className="not-italic mx-[6px]  font-[750]">October 2025</span> .
          </span>
          <br /> <br />
          <span className="font-[800]">My very first one that I wrote:</span> <br />
          Her only desire was that they both keep playing and no one falls in
          love <br /> <br />
          <span className="font-[800]">What love looked like at 2am: </span> <br />
          His voice brings a certain calmness to her stormy soul;
          <br />
          His presence makes her glow in a different light. <br /> <br />
          <span className="font-[800]">When you couldn't decide: </span><br />
          She thought that the wind was a bit confused today, <br />
          Just like him... <br />
          It just could not decide whether to pull her in <br />
          Or push her away...
        </p>
      </div>
    </section>
  );
}

export default Poetry;
