import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

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

    tl.fromTo(".sidec h1",{
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
      <div>
      <h1  className="pb-2  md:p-10 text-[#FF535B]   mt-[57vh] md:mt-0  font-coolvetica">
        <span className="flex text-[2.5rem] md:text-[6em] lg:text-[7em] xl:text-[8em] min-[1440px]:text-[8em] 2xl:text-[12em] min-[2560px]:text-[18em] w-full justify-center items-center">
          {nameLetters.map(({ letter, key }) => (
            
            <span
              key={key}
              ref={(el) => (lettersRef.current[key] = el)}
              className={`inline-block ${letter === ' ' ? 'p-1 lg:p-4 xl:p-8' : ''}`}
              style={{
                color: isMobileOrTablet ? ' #1d1d1d' : '#FF535B', // Fill color for the letters
                WebkitTextStroke: isMobileOrTablet ? '0.7px #FF535B' : 'none', // Apply stroke only for mobile/tablet
              }}
            >
              {letter}
            </span>
          ))}
        </span>
      </h1>

      </div>
      <div  className="sidec  flex flex-col justify-center ml-0 items-center   min-[414px]:mt-36 md:items-end md:mr-20 md:mt-0 xl:mt-0  lg:mr-24 lg:justify-center lg:mt-16 lg:items-end xl:items-end xl:mr-36 xl:justify-center xxl:mt-[200px]">
        <div className=' flex gap-4  overflow-hidden pb-1 md:mt-0'>
        <h1 className="text-3xl overflow-hidden  sm:text-5xl text-[#FF535B] md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-coolvetica">
          Frontend
        </h1>
        <h1 className="text-3xl sm:text-5xl text-[#ffff] md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-coolvetica">
          Developer
        </h1>
        </div>
        <div className='flex overflow-hidden pb-3 gap-4'>
        <h1 className="text-3xl sm:text-5xl text-[#FF535B] md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-coolvetica">
          UI/UX
        </h1>
        <h1 className="text-3xl sm:text-5xl text-[#ffff] md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-coolvetica">
          Designer
        </h1>
        
        </div>
        <div className='flex flex-col w-[70%] md:w-[25%] items-center lg:flex-row '>
        
<a href="https://linktr.ee/badrinarayanms"  target="_blank" rel="noopener noreferrer" className="lg:mr-5 w-full  btn z-10 mt-2 text-gray-900 bg-white   duration-100 hover:text-[#ff535b] border-[#ff535b] focus:ring-4 focus:outline-none focus:ring-[#ff535b] font-medium rounded-3xl text-sm px-5 py-2.5 text-center justify-center inline-flex items-center ">
   Connect with Me <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  <path
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M1 5h12m0 0L9 1m4 4L9 9"
  />
</svg>
</a>
<Link to="/about"  rel="noopener noreferrer" className="  justify-center w-full   btn z-10 mt-3 text-gray-900 bg-[#ff535b]   duration-100 hover:text-white border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center ">
   About <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  <path
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M1 5h12m0 0L9 1m4 4L9 9"
  />
</svg>
</Link>
        </div>
      </div>
    </>
  );
};

export default Titlee;
