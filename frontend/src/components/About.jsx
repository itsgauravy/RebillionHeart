import React from 'react'
import "../css/home.css";
import "../css/About.css";
import Title from '../components/Title';

function About() {
  return (
    <section className="container ">
      <Title heading="About me" />      
      
      <div className="aboutp flex flex-wrap">
      <div className="imgAbt w-[75%] mx-auto overflow-hidden">
          <img src="/perpic/img-7.jpg" alt=""className='  @apply bg-bottom bg-cover @apply w-[70%] mx-auto my-2.5 object-cover  h-[60vh]' />

            <h3 className='@apply w-full text-center text-[1.7rem] text-[color:var(--text)]'> The Soul Behind The Words</h3>
        <p className='text-[color:var(--text2)] abtp text-center' >
            I’m not here to teach. <br/>
            I’m here to remember — and to help you remember too.<br/>

            The poems I write, the places I walk, the silences I keep — they’re all part of the same
            sacred journey: <br/>
            a return to the heart.
        </p>
      </div>

      <div className="aboutText @apply w-6/12 mx-auto flex flex-wrap  @apply content-baseline  bg-[color:var(--bg)] p-[10px]  [@media(max-width:580px)]:w-[95%] 
             [@media(max-width:580px)]:mx-auto 
             [@media(max-width:580px)]:p-[10px] 
             [@media(max-width:580px)]:h-max " >
      
        <h4 className=' hdngl @apply w-full text-center text-[1.5rem] text-[color:var(--text)] leading-none ' style={{marginTop:"0"}}>Who I Am -</h4>

        <p className='text-[color:var(--text2)] abtp '  > 
            I’m  <span className="font-extrabold pspan  text-[var(--text)] underline">
                Jaskaran
              </span>
             — a poet, spiritual seeker, and soul storyteller.<br/>

            I write from the in-between:<br/>
             from moments that crack you open and leave you changed forever.<br/>
            from the ache of divine love, the grief of unspoken words, the beauty of walking through
            fire and still choosing softness.<br/><br />

            This space — Rebellion Heart — was born through heartbreak and healing, devotion and
            disillusionment, surrender and sacred rage.<br/>
            It’s where I pour everything I’ve learned through silence, fasting, meditation, walking, and
            listening to the land.
        </p>

         <h4 className=' hdngl @apply w-full text-center text-[1.5rem] text-[color:var(--text)] leading-none'>What Poetry Means To Me -</h4>

        <p className='text-[color:var(--text2)] abtp '> 
            Poetry found me when words failed.<br/>
It gave language to my longings, a voice to my soul, and a place to hold the emotions that
had nowhere else to live.<br/>

My poetry is not curated.<br/>
It’s channeled — through my body, through the earth, through the winds and waters I’ve
walked beside. <br/>

It’s how I grieve, how I remember, how I love.<br/>

Each piece is a prayer. A process. An untold story. A map back to self.
        </p>

        
      </div>
      
      <div className="callReb flex pt-2.5 @apply w-[80%]  mt-[10vh]">
        
        <div className='w-[100%] flex  flex-wrap content-baseline justify-center'> 
                  <div className='w-[30%] flex align-middle'>
          <img src="/perpic/IMG_2739.jpeg" alt="" className=' w-[90%] mx-auto  my-auto'  />
        </div>

      <div className='w-[50%]'>

        <h4 className=' hdngl @apply  text-center text-[1.5rem] text-[color:var(--text)] leading-none w-full' style={{marginBottom:'20px'}}>Why I Call It a Rebellion -</h4>
 
        <p className='text-[color:var(--text2)] abtp w-full pe-4 '> 
          Because softness is a rebellion. <br />
Staying tender when the world tells you to harden is a sacred act. <br />
Loving someone who couldn’t love you back — and still choosing to heal without closing
your heart — is a revolution. <br />

Feminine embodiment, intuitive living, and choosing stillness in a society that glorifies
speed… <br />
this is the rebellion I walk.
One step, one breath, one unwritten word at a time.
        </p>

        
      </div>

        </div>
      </div>

      <div className="callrev2 flex @apply align-baseline w-[80%] ">
         <div className='w-full flex  flex-wrap content-baseline justify-center'> 
           <div className='w-[50%]'>
 <h4 className=' hdngl @apply w-full text-center text-[1.5rem] text-[color:var(--text)] leading-none' style={{marginTop:'0'}}>Nature, Ritual  the Earth Chakra Journey </h4>
      <p className='text-[color:var(--text2)] abtp w-full flex pe-4 '> 
          I find myself in the wild. <br />
Through golden hour walks, hikes in the forest, and waterfall prayers, I’ve learned to let the
land guide me. <br />
I am walking Earth Chakra sites, communed with Kauri trees, fasted in silence, and followed
the thread of Spirit across landscapes and lifetimes. <br />

Nature is my greatest mirror — and my most honest teacher. <br />

Photography, poetry, and walking are one seamless practice to me. <br />
Each trail becomes a sacred scroll. <br />
Each photo a love letter to the divine woven through the everyday.
        </p>

       </div>

        

         <img src="/perpic/IMG_3212.jpeg" alt="" className=' w-[30%]  imfwT'  /> 
        </div>

          {/* <div className='w-[25%] flex justify-around max-h-[500px] overflow-hidden  imtwo'>
         
          <img src="/perpic/IMG_2231.jpeg" alt="" className=' w-[100%] object-cover h-fit'  />
        </div> */}
      </div>
       </div>  
    </section>
  );
};

export default About ;
