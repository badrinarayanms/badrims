import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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

    tl.fromTo(".sidecc h1",{
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
    tl.fromTo(".sidecc p",{
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.3,
      ease: 'power2.out',
      scrollTrigger:{
        trigger: '.sidecc p', // Targeting the first <h1>
        start: 'top 80%',
        end: 'bottom 30%',
        // Allows the animation to be tied to the scroll
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
        duration: 0.5,
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
  

  



    tl.fromTo(".btn",{
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.3,
      ease: 'power2.out',
      
    })
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
      <div className="flex flex-col justify-center items-center mt-0 md:mr-20 md:mt-0 lg:justify-center lg:mt-16 lg:items-start px-10 xl:mr-36 xl:justify-center xxl:mt-[200px]">
        <div className="sidecc flex gap-4 overflow-hidden pb-1 md:mt-0">
          <p className=" text-3xl overflow-hidden sm:text-5xl text-[#FF535B] md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-coolvetica">
            Who
          </p>
          <p className=" text-3xl overflow-hidden sm:text-5xl text-[#FF535B] md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-coolvetica">
            am
          </p>
          <p className=" text-3xl overflow-hidden sm:text-5xl text-[#FF535B] md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-coolvetica">
            i
          </p>
          <p className=" text-3xl overflow-hidden sm:text-5xl text-[#FF535B] md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-coolvetica">
            ?
          </p>
        </div>
        <div className="abt flex flex-col overflow-hidden pb-3 gap-4">
          <div className='overflow-hidden'><h1 className=" text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-6xl xl:text-xl 2xl:text-3xl font-coolvetica">
          Hello! I'm Badri ms , a passionate software developer with a strong foundation in computer science and a flair for creating efficient, user-friendly applications.</h1></div>

          <div className='overflow-hidden'><h1 className="text-3xl overflow-hidden sm:text-5xl text-[#ffff] md:text-4xl lg:text-6xl xl:text-xl 2xl:text-3xl font-coolvetica">Currently pursuing my B.E. in Computer Science and Engineering at SRM Institute of Science and Technology, I'm driven by the endless possibilities that technology offers.</h1></div>
          
        </div>
        
      </div>
      <div className='h-screen'></div>
    </>
  );
};

export default Titlee;
