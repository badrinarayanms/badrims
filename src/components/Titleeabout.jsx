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

    const wwidth = window.innerWidth;
    
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
         // Optional: helps you visualize start/end positions
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
        start: 'top 50%',
        end: 'bottom 30%',
          
        
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
          start: 'top 70%',
          end: 'bottom 30%',
            
          // Allows the animation to be tied to the scroll
           // Optional: helps you visualize start/end positions
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
             // Optional: helps you visualize start/end positions
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
           // Optional: helps you visualize start/end positions
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
         // Optional: helps you visualize start/end positions
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
            
           // Optional: visualize start/end positions
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
         // Optional: helps you visualize start/end positions
      }
    }
  );
     // ScrollTrigger for the second <h1>
   




     if (wwidth >= 1024) {
    gsap.fromTo('.pintext h1', 
      { x: '0%' },            // Starting position (100% to the right)
      { 
        x: wwidth>=2560? '-80%':wwidth>=1440?'-80%':wwidth>=1024?'-90%':'0%',                // End position (back to original)
        scrollTrigger: {
          trigger: '.pintext',
          start: 'top top',     // Start the animation when the top of .pintext hits the top of the viewport
          end: isMobileOrTablet ? 'bottom 0%' : '+=1000',         // Adjust the scroll distance
          pin:wwidth>768,            // Pins the element in place
          pinSpacing: false,    // Removes extra spacing after unpinning
            
          scrub:true,      // Shows markers for debugging
        }
      }
    );
  }
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
          start: 'top 90%',
          end: 'bottom 30%',
            
          // Allows the animation to be tied to the scroll
           // Optional: helps you visualize start/end positions
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
          start: 'top 90%',
          end: 'bottom 30%',
          
          // Allows the animation to be tied to the scroll
          // Optional: helps you visualize start/end positions
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
      <div className='w-full overflow-y-hidden overflow-hidden h-screen'>
      <div className="flex flex-col w-full  items-center relative   h-44 md:h-64">
        
        <div className="w-screen md:mt-36 mt-24 ">
            <div className="   overflow-hidden  -rotate-[8deg] md:-rotate-6  w-[120vw] -mx-4">
              <div className="flex whitespace-nowrap sidec scrolling-container">
              <p className="text-[#5B5555]  font-coolvetica  text-8xl md:text-[10rem]  lg:text-[9rem] min-[600px]:text-[8rem] xxl:text-[18rem] font-medium flex justify-center items-center  md:word-spacing word-spacing-m scrolling-text-right">
              WEB DEVELOPER</p>
                 <p style={{
                color:' #1d1d1d', // Fill color for the letters
                WebkitTextStroke:  '2px #FF535B', // Apply stroke only for mobile/tablet
              }} className="font-coolvetica text-8xl md:text-[10rem]  lg:text-[9rem] min-[600px]:text-[8rem] xxl:text-[18rem] font-medium flex justify-center items-center  md:word-spacing word-spacing-m scrolling-text-right mr-36">
                 UI/UX DESIGNER</p>
                   <p className="text-[#5B5555] font-coolvetica  text-8xl md:text-[10rem]  lg:text-[9rem] min-[600px]:text-[8rem] xxl:text-[18rem] font-medium flex justify-center items-center  md:word-spacing word-spacing-m  scrolling-text-right  mr-12">
                   WEB DEVELOPER</p>
                   <p style={{
                color:' #1d1d1d', // Fill color for the letters
                WebkitTextStroke:  '2px #FF535B', // Apply stroke only for mobile/tablet
              }} className="font-coolvetica text-8xl md:text-[10rem]  lg:text-[9rem] min-[600px]:text-[8rem] xxl:text-[18rem] font-medium flex justify-center  items-center  md:word-spacing word-spacing-m scrolling-text-right mr-4">
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
              }} className="font-coolvetica flex justify-center items-center text-8xl md:text-[10rem]  lg:text-[9rem] min-[600px]:text-[8rem] xxl:text-[18rem] font-medium  md:word-spacing word-spacing-m scrolling-text">
                WEB DEVELOPER</p>
                <p style={{
                color:' #1d1d1d', // Fill color for the letters
                WebkitTextStroke:  '2px #5B5555', // Apply stroke only for mobile/tablet
              }} className="text-[#5B5555] font-coolvetica flex justify-center items-center  text-8xl md:text-[10rem]  lg:text-[9rem] min-[600px]:text-[8rem] xxl:text-[18rem] font-medium md:word-spacing word-spacing-m mr-16  scrolling-text">
                   UI/UX DESIGNER</p>
                 <p style={{
                color:' #1d1d1d', // Fill color for the letters
                WebkitTextStroke:  '2px #5B5555', // Apply stroke only for mobile/tablet
              }} className="font-coolvetica flex justify-center items-center text-8xl md:text-[10rem]  lg:text-[9rem] min-[600px]:text-[8rem] xxl:text-[18rem] font-medium  md:word-spacing word-spacing-m scrolling-text ">
                   WEB DEVELOPER</p>
                   <p style={{
                color:' #1d1d1d', // Fill color for the letters
                WebkitTextStroke:  '2px #5B5555', // Apply stroke only for mobile/tablet
              }} className="text-[#5B5555] font-coolvetica flex justify-center items-center  text-8xl md:text-[10rem]  lg:text-[9rem] min-[600px]:text-[8rem] xxl:text-[18rem] font-medium md:word-spacing word-spacing-m scrolling-text">
                   UI/UX DESIGNER</p>
              </div>
              
            </div>
        </div>
        <div className="w-screen ">
            <div className="   overflow-hidden  -rotate-[8deg] md:-rotate-6    w-[120vw] -mx-4">
              <div className="flex whitespace-nowrap sidec scrolling-container">
              <p style={{
                color:' #1d1d1d', // Fill color for the letters
                WebkitTextStroke:  '2px #5B5555', // Apply stroke only for mobile/tablet
              }} className="font-coolvetica text-8xl md:text-[10rem]   lg:text-[9rem] min-[600px]:text-[8rem] xxl:text-[18rem] font-medium flex justify-center items-center  md:word-spacing word-spacing-m scrolling-text-right">
              WEB DEVELOPER</p>
                 <p className="text-[#FF535B] font-coolvetica text-8xl md:text-[10rem]  lg:text-[9rem] min-[600px]:text-[8rem] xxl:text-[18rem] font-medium flex justify-center items-center  md:word-spacing word-spacing-m scrolling-text-right mr-36">
                 UI/UX DESIGNER</p>
                   <p style={{
                color:' #1d1d1d', // Fill color for the letters
                WebkitTextStroke:  '2px #FF535B', // Apply stroke only for mobile/tablet
              }}  className="font-coolvetica  text-8xl md:text-[10rem]  lg:text-[9rem] min-[600px]:text-[8rem] xxl:text-[18rem] font-medium flex justify-center items-center  md:word-spacing word-spacing-m scrolling-text-right  mr-16">
                   WEB DEVELOPER</p>
                   <p className="text-[#FF535B] font-coolvetica text-8xl md:text-[10rem]  lg:text-[9rem] min-[600px]:text-[8rem] xxl:text-[18rem] font-medium flex justify-center items-center  md:word-spacing word-spacing-m scrolling-text-right">
                 UI/UX DESIGNER</p>
              </div>
            </div>
            <div className='w-full sidec flex items-center justify-center  lg:justify-end p-20 mt-1rem min-[600px]:mt-[4rem] min-[800px]:mt-[10rem] md:mt-[1rem] min-[800px]:justify-center xl:-mt-32 xxl:mt-0'><p className="bg-[#5B5555] bg-opacity-15 px-4 h-14 py-0  rounded-full flex items-center justify-end overflow-hidden text-xl text-justify text-[#ff535b] md:text-2xl font-coolvetica">
        Scroll down <svg className="rotate-90  w-3 h-6 lg:w-5 lg:h-10 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  <path
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M1 5h12m0 0L9 1m4 4L9 9"
  />
</svg></p></div>
        </div>
        
        
      </div>
      

      
      </div>
      <div className="flex flex-col justify-center items-center min-[600px]:-mt-88 md:-mt-56  min-[800px]:-mt-80 -mt-56  xl:-mt-6 xxl:-mt-56 lg:justify-center lg:mt-16 lg:items-start px-6 md:px-20   ">
        
        <div className="abt w-full flex flex-col overflow-hidden pb-3 gap-2">
        <div className='overflow-hidden'><h1 className="  w-full overflow-hidden text-5xl text-justify text-[#ff535b] md:text-4xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        Who am i ?</h1></div>
        <div className='overflow-hidden'><h1 className=" text-sm overflow-hidden sm:text-5xl text-[#ffff] text-justify md:text-2xl lg:text-3xl xxl:text-7xl xl:text-4xl 2xl:text-3xl font-coolvetica">
          Hello! I'm Badri ms , a passionate developer with a strong foundation in computer science and a flair for creating efficient, user-friendly applications.</h1></div>

          <div className='overflow-hidden'><h1 className="text-sm overflow-hidden sm:text-5xl text-[#ffff] md:text-2xl lg:text-3xl xxl:text-7xl xl:text-4xl 2xl:text-3xl font-coolvetica">Currently pursuing my B.Tech in Computer Science and Engineering at SRM Institute of Science and Technology, I'm driven by the endless possibilities that technology offers.</h1></div>
          
        </div>
        
      </div>


      <div className="flex w-full flex-col justify-center mt-0 md:mr-20 md:mt-10 lg:justify-center lg:mt-16 items-start px-6 md:px-20 xl:mr-36 xl:justify-center xxl:mt-[200px]">
        
        <div className="skill flex flex-col  overflow-hidden pb-3 gap-4">
        <div className='overflow-hidden flex '><h1 className=" text-5xl  overflow-hidden sm:text-5xl text-[#ff535b] md:text-4xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        Tech Stack</h1></div>
       
          
        </div>
        <div className="skillset w-full flex flex-col overflow-hidden pb-3 gap-4">
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-5xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        html</h1>
        <div className='line w-full mt-4 h-[0.1rem] bg-white'></div></div>
         <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-5xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        css</h1>
        <div className='line w-full mt-4 h-[0.1rem] bg-white'></div></div>
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-5xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        JavaScript</h1>
        <div className='line w-full mt-4 h-[0.1rem] bg-white'></div></div>
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-5xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        React JS</h1>
        <div className='line w-full mt-4 h-[0.1rem] bg-white'></div></div>
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-5xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        Java</h1>
        <div className='line w-full mt-4 h-[0.1rem] bg-white'></div></div>
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-5xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        Python</h1>
        <div className='line w-full mt-4 h-[0.1rem] bg-white'></div></div>
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-5xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        C C++</h1>
        <div className='line w-full mt-4 h-[0.1rem] bg-white'></div></div>
        <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-5xl xl:text-8xl 2xl:text-8xl font-coolvetica">
        Open to learn new tech</h1>
        <div className='line w-full mt-4 h-[0.1rem] mb-10 md:mb-36 bg-white'></div></div>
        </div>
        
      </div>

      <div className='pintext w-full flex   items-center overflow-hidden px-5 md:px-20 lg:h-screen bg-[#ff535b]'>
  <h1 className="text-3xl flex justify-between items-center  lg:block  w-full lg:w-auto   text-[#1d1d1d] md:text-5xl lg:text-[30rem] xl:text-[40rem] 2xl:text-[50rem] xxxl:text-[60rem] font-coolvetica whitespace-nowrap">
    Let's connect! <a href="https://www.linkedin.com/in/badri-narayan-m-s-60bab42a2/"  target="_blank" rel="noopener noreferrer" className="my-auto z-10 mt-2 ml-4 md:ml-0 text-[gray-900] bg-white md:h-20 lg:h-full w-36 md:w-64 lg:w-full duration-100 hover:text-[#ff535b] border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-[15rem] text-[30rem] lg:text-[10rem] p-0 lg:px-5 lg:py-2.5 text-center flex justify-between lg:justify-start lg:inline-flex items-center dark:focus:ring-gray-600 dark:bg-[#1d1d1d] hover:border-gray-700 dark:text-white  me-2 mb-2">
   <img src="/assets/dplinkedin.png" alt="prof" width={500} className='p-2 md:p-5 lg:p-10 w-11 md:w-24 lg:w-64  xxl:w-96' /><svg className="rtl:rotate-180 w-6 h-10 lg:w-30 lg:h-20 mr-5 lg:mr-0 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
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

    <div className='lg:h-screen '>
      
    </div>
    <div className='h-full '>
      
    <div className="abtbtm w-full md:mt-5 lg:mt-52 xxl:-mt-[40rem] md:px-20 p-3 flex justify-between">
    <a
      href="mailto:badrinarayan.moola@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="abtbtm z-10 mt-2 text-gray-900 bg-white duration-100 text-[0.5rem] hover:text-[#ff535b] border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-3xl  lg:text-xl py-1.3 px-2.5 md:px-5 md:py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-[#5b5555] dark:border-gray-700 dark:text-white me-2 mb-2"
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
        className=" text-white dark:text-white hover:text-[#ff535b]"
      >
        <FaLinkedin size={30} />
      </a>

      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com/badri__.ms"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-white dark:text-white hover:text-[#ff535b]"
      >
        <FaInstagram size={30} />
      </a>

      {/* GitHub Icon */}
      <a
        href="https://github.com/badrinarayanms"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-white dark:text-white hover:text-[#ff535b]"
      >
        <FaGithub size={30} />
      </a>
      
    </div>
    
  </div>
  <div className='foot w-full overflow-hidden  '>
  <div className='btn w-full mt-4 xl:mt-0 h-[0.1rem] mb-5 lg:mb-10 bg-white'></div></div>
  <div className='foot overflow-hidden mb-12 px-20'>
   
        <h1 className="btn text-sm text-center overflow-hidden  xxl:text-5xl text-[#ffff] md:text-2xl lg:text-xl xl:text-2xl 2xl:text-xl font-coolvetica">
        Designed with ❤️ by Badri M S</h1>
        </div>
</div>    </>
  );
};

export default Titlee;
