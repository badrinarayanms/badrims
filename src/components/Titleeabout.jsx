import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Titlee = () => {
  const lettersRef = useRef([]);

  useGSAP(() => {
    
    const tl = gsap.timeline();

 
    const isMobileOrTablet = window.innerWidth <= 425;
    const delay = isMobileOrTablet ? 2 : 0; 
    tl.fromTo(
      lettersRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        delay, 
      }
    );

    tl.fromTo(".sidecc",{
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.sidecc h1', // Targeting the third <h1>
        start: 'top 80%',
        end: 'bottom 30%',
        // Allows the animation to be tied to the scroll
        markers: true, // Optional: helps you visualize start/end positions
      }
       
    })
    tl.fromTo(".sidec p",{
      opacity: 0,
      x: 50,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out',

       
    })
    const h1Element = document.querySelector(".abt h1"); // Select h1 element
    tl.fromTo(h1Element,{
      opacity: 0.5,
     
    },
    {
      opacity: 1,
    
      duration: 0.1,      
      ease: 'power2.out',
      scrollTrigger:{
        trigger: h1Element, // Use h1Element as the trigger
        start: 'top 80%',
        end: 'bottom 30%',
        markers: true,
      }
      
       
    })
    // ScrollTrigger for the first <h1>
    gsap.fromTo(
      '.abt h1:nth-of-type(1)',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.abt h1:nth-of-type(1)', // Targeting the first <h1>
          start: 'top 80%',
          end: 'bottom 30%',
          // Allows the animation to be tied to the scroll
          markers: true, // Optional: helps you visualize start/end positions
        }
      }
    );
       // ScrollTrigger for the second <h1>
       gsap.fromTo(
        '.abt h1:nth-of-type(2)',
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay:2,
          ease: 'power2.out',
          stagger:1,
          scrollTrigger: {
            trigger: '.abt h1:nth-of-type(2)', // Targeting the second <h1>
            start: 'top 80%',
            end: 'bottom 30%',
          // Allows the animation to be tied to the scroll
            markers: true, // Optional: helps you visualize start/end positions
          }
        }
      );
       // ScrollTrigger for the third <h1>
    gsap.fromTo(
      '.abt h1:nth-of-type(3)',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.abt h1:nth-of-type(3)', // Targeting the third <h1>
          start: 'top 80%',
          end: 'bottom 30%',
          // Allows the animation to be tied to the scroll
          markers: true, // Optional: helps you visualize start/end positions
        }
      }
    );
  

  // ScrollTrigger for the first <h1>
  gsap.fromTo(
    '.skill h1:nth-of-type(1)',
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.skill h1:nth-of-type(1)', // Targeting the first <h1>
        start: 'top 80%',
        end: 'bottom 30%',
        // Allows the animation to be tied to the scroll
        markers: true, // Optional: helps you visualize start/end positions
      }
    }
  );
  gsap.utils.toArray('.skillset > *').forEach((element, index) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 30%',
          markers: true, // Optional: visualize start/end positions
        }
      }
    );
  });
  gsap.fromTo(
    '.skillset .line',
    {
      width:'0%',
      
    },
    {
      width:'100%',
  
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.skillset ', // Targeting the first <h1>
        start: 'top 80%',
        end: 'bottom 30%',
        // Allows the animation to be tied to the scroll
        markers: true, // Optional: helps you visualize start/end positions
      }
    }
  );
     // ScrollTrigger for the second <h1>
   





    gsap.fromTo('.pintext h1', 
      { x: '0%' },            // Starting position (100% to the right)
      { 
        x: '-250%',                // End position (back to original)
        scrollTrigger: {
          trigger: '.pintext',
          start: 'top top',     // Start the animation when the top of .pintext hits the top of the viewport
          end: '+=1000',        // Adjust the scroll distance
          pin: true,            // Pins the element in place
          pinSpacing: false,    // Removes extra spacing after unpinning
          markers: true,  
          scrub:true,      // Shows markers for debugging
        }
      }
    );
    gsap.fromTo(
      '.abtbtm a',
      {
        opacity:0,
        y:50,
      },
      {
        opacity:1,
        y:0,
        stagger:0.4,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.abtbtm ', // Targeting the first <h1>
          start: 'top 80%',
          end: 'bottom 30%',
          // Allows the animation to be tied to the scroll
          markers: true, // Optional: helps you visualize start/end positions
        }
      }
    );
    gsap.fromTo(
      '.foot .btn',
      {
        opacity:0,
        y:50,
      },
      {
        opacity:1,
        y:0,
        stagger:0.5,
        duration: 0.5,
        delay:1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.abtbtm ', // Targeting the first <h1>
          start: 'top 80%',
          end: 'bottom 30%',
          // Allows the animation to be tied to the scroll
          markers: true, // Optional: helps you visualize start/end positions
        }
      }
    );
  }, []);
  const isMobileOrTablet = window.innerWidth <= 425;
  const name = "Badri Narayan M S";
  const nameLetters = name.split('').map((letter, index) => ({
    letter,
    key: index,
  }));

  return (
    <>
      <div className='w-full overflow-hidden h-screen'>
      <div className="flex flex-col w-full  items-center relative   h-44 md:h-64">
        
        <div className="w-screen mt-24 ">
            <div className="   overflow-hidden  rotate-[8deg] md:-rotate-6  w-[120vw] -mx-4">
              <div className="flex whitespace-nowrap sidec scrolling-container">
              <p className="text-[#5B5555]  font-coolvetica md:text-9xl  lg:text-[12rem] font-medium flex justify-center items-center text-sm md:word-spacing word-spacing-m scrolling-text-right">
              WEB DEVELOPER</p>
                 <p style={{
                color:' #1d1d1d', // Fill color for the letters
                WebkitTextStroke:  '2px #FF535B', // Apply stroke only for mobile/tablet
              }} className="font-coolvetica md:text-9xl  lg:text-[12rem] font-medium flex justify-center items-center text-sm md:word-spacing word-spacing-m scrolling-text-right mr-36">
                 UI/UX DESIGNER</p>
                   <p className="text-[#5B5555] font-coolvetica  md:text-9xl  lg:text-[12rem] font-medium flex justify-center items-center text-sm md:word-spacing word-spacing-m  scrolling-text-right  mr-12">
                   WEB DEVELOPER</p>
                   <p style={{
                color:' #1d1d1d', // Fill color for the letters
                WebkitTextStroke:  '2px #FF535B', // Apply stroke only for mobile/tablet
              }} className="font-coolvetica md:text-9xl  lg:text-[12rem] font-medium flex justify-center  items-center text-sm md:word-spacing word-spacing-m scrolling-text-right mr-4">
                 UI/UX DESIGNER</p>
              </div>
            </div>
        </div>
        <div className="w-screen">
            <div className=" py-2   overflow-hidden  -rotate-[8deg] md:-rotate-6  -my-2  w-[120vw] -mx-4 ">
              <div className="flex whitespace-nowrap sidec scrolling-container">
              <p style={{
                color:' #1d1d1d', // Fill color for the letters
                WebkitTextStroke:  '2px #5B5555', // Apply stroke only for mobile/tablet
              }} className="font-coolvetica flex justify-center items-center md:text-9xl  lg:text-[12rem] font-medium text-sm md:word-spacing word-spacing-m scrolling-text">
                WEB DEVELOPER</p>
                <p style={{
                color:' #1d1d1d', // Fill color for the letters
                WebkitTextStroke:  '2px #5B5555', // Apply stroke only for mobile/tablet
              }} className="text-[#5B5555] font-coolvetica flex justify-center items-center text-sm md:text-9xl  lg:text-[12rem] font-medium md:word-spacing word-spacing-m mr-16  scrolling-text">
                   UI/UX DESIGNER</p>
                 <p style={{
                color:' #1d1d1d', // Fill color for the letters
                WebkitTextStroke:  '2px #5B5555', // Apply stroke only for mobile/tablet
              }} className="font-coolvetica flex justify-center items-center md:text-9xl  lg:text-[12rem] font-medium text-sm md:word-spacing word-spacing-m scrolling-text ">
                   WEB DEVELOPER</p>
                   <p style={{
                color:' #1d1d1d', // Fill color for the letters
                WebkitTextStroke:  '2px #5B5555', // Apply stroke only for mobile/tablet
              }} className="text-[#5B5555] font-coolvetica flex justify-center items-center text-sm md:text-9xl  lg:text-[12rem] font-medium md:word-spacing word-spacing-m scrolling-text">
                   UI/UX DESIGNER</p>
              </div>
              
            </div>
        </div>
        <div className="w-screen ">
            <div className="   overflow-hidden  rotate-[8deg] md:-rotate-6    w-[120vw] -mx-4">
              <div className="flex whitespace-nowrap sidec scrolling-container">
              <p style={{
                color:' #1d1d1d', // Fill color for the letters
                WebkitTextStroke:  '2px #5B5555', // Apply stroke only for mobile/tablet
              }} className="font-coolvetica md:text-9xl   lg:text-[12rem] font-medium flex justify-center items-center text-sm md:word-spacing word-spacing-m scrolling-text-right">
              WEB DEVELOPER</p>
                 <p className="text-[#FF535B] font-coolvetica md:text-9xl  lg:text-[12rem] font-medium flex justify-center items-center text-sm md:word-spacing word-spacing-m scrolling-text-right mr-36">
                 UI/UX DESIGNER</p>
                   <p style={{
                color:' #1d1d1d', // Fill color for the letters
                WebkitTextStroke:  '2px #FF535B', // Apply stroke only for mobile/tablet
              }}  className="font-coolvetica  md:text-9xl  lg:text-[12rem] font-medium flex justify-center items-center text-sm md:word-spacing word-spacing-m scrolling-text-right  mr-16">
                   WEB DEVELOPER</p>
                   <p className="text-[#FF535B] font-coolvetica md:text-9xl  lg:text-[12rem] font-medium flex justify-center items-center text-sm md:word-spacing word-spacing-m scrolling-text-right">
                 UI/UX DESIGNER</p>
              </div>
            </div>
        </div>
      </div>

      
      </div>
      <div className="flex flex-col justify-center items-center mt-0 md:mr-20 md:mt-0 lg:justify-center lg:mt-16 lg:items-start px-20 xl:mr-36 xl:justify-center xxl:mt-[200px]">
        
        <div className="abt flex flex-col overflow-hidden pb-3 gap-4">
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ff535b] md:text-4xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        Who am i ?</h1></div>
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-6xl xl:text-xl 2xl:text-3xl font-coolvetica">
          Hello! I'm Badri ms , a passionate software developer with a strong foundation in computer science and a flair for creating efficient, user-friendly applications.</h1></div>

          <div className='overflow-hidden'><h1 className="text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-6xl xl:text-xl 2xl:text-3xl font-coolvetica">Currently pursuing my B.E. in Computer Science and Engineering at SRM Institute of Science and Technology, I'm driven by the endless possibilities that technology offers.</h1></div>
          
        </div>
        
      </div>


      <div className="flex w-full flex-col justify-center items-center mt-0 md:mr-20 md:mt-0 lg:justify-center lg:mt-16 lg:items-start px-20 xl:mr-36 xl:justify-center xxl:mt-[200px]">
        
        <div className="skill flex flex-col overflow-hidden pb-3 gap-4">
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ff535b] md:text-4xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        Tech Stack</h1></div>
       
          
        </div>
        <div className="skillset w-full flex flex-col overflow-hidden pb-3 gap-4">
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        html</h1>
        <div className='line w-full mt-4 h-[0.1rem] bg-white'></div></div>
         <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        css</h1>
        <div className='line w-full mt-4 h-[0.1rem] bg-white'></div></div>
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        JavaScript</h1>
        <div className='line w-full mt-4 h-[0.1rem] bg-white'></div></div>
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        React JS</h1>
        <div className='line w-full mt-4 h-[0.1rem] bg-white'></div></div>
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        Java</h1>
        <div className='line w-full mt-4 h-[0.1rem] bg-white'></div></div>
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        Python</h1>
        <div className='line w-full mt-4 h-[0.1rem] bg-white'></div></div>
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        C C++</h1>
        <div className='line w-full mt-4 h-[0.1rem] bg-white'></div></div>
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        Open to learn new tech</h1>
        <div className='line w-full mt-4 h-[0.1rem] mb-36 bg-white'></div></div>
        </div>
        
      </div>

      <div className='pintext w-full overflow-hidden px-20 h-screen bg-[#ff535b]'>
  <h1 className="text-3xl  sm:text-5xl text-[#1d1d1d] md:text-4xl lg:text-8xl xl:text-8xl 2xl:text-[50rem] font-coolvetica whitespace-nowrap">
    Let's connect! <a href="https://www.linkedin.com/in/badri-narayan-m-s-60bab42a2/"  target="_blank" rel="noopener noreferrer" className=" z-10 mt-2 text-[gray-900] bg-white  w-full duration-100 hover:text-[#ff535b] border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-[15rem] text-[30rem] lg:text-[10rem] px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-[#1d1d1d] hover:border-gray-700 dark:text-white  me-2 mb-2">
   <img src="/assets/dplinkedin.png" alt="prof" width={500} className='p-10' /><svg className="rtl:rotate-180 w-30 h-20 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  <path
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M1 5h12m0 0L9 1m4 4L9 9"
  />
</svg>
</a>
  </h1>
</div>

    <div className='h-screen'>
      
    </div>
    <div className=''>
      
    <div className="abtbtm mt-10 p-20 flex justify-between">
    <a
      href="https://www.linkedin.com/in/badri-narayan-m-s-60bab42a2/"
      target="_blank"
      rel="noopener noreferrer"
      className="abtbtm z-10 mt-2 text-gray-900 bg-white duration-100 hover:text-[#ff535b] border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-3xl text-sm lg:text-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-[#5b5555] dark:border-gray-700 dark:text-white me-2 mb-2"
    >
      badrinarayan.moola@gmail.com
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>

    <div className="abtbtm flex mt-5 space-x-4">
      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/badri-narayan-m-s-60bab42a2/"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-gray-900 dark:text-white hover:text-[#ff535b]"
      >
        <FaLinkedin size={30} />
      </a>

      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com/badri__.ms"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-gray-900 dark:text-white hover:text-[#ff535b]"
      >
        <FaInstagram size={30} />
      </a>

      {/* GitHub Icon */}
      <a
        href="https://github.com/badrinarayanms"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-gray-900 dark:text-white hover:text-[#ff535b]"
      >
        <FaGithub size={30} />
      </a>
      
    </div>
    
  </div>
  <div className='foot overflow-hidden mb-16 px-20'>
        <div className='btn w-full mt-4 h-[0.1rem] mb-10 bg-white'></div>
        <h1 className="btn text-3xl text-center overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-xl xl:text-8xl 2xl:text-xl font-coolvetica">
        Designed with ❤️ by Badri M S</h1>
        </div>
</div>    </>
  );
};

export default Titlee;
