import React, { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import logo from '../../public/assets/smile.png';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosed, setMenuClosed] = useState(true);
  const [iconSize, setIconSize] = useState(20); // Default Hamburger icon size
  const [logoSize, setLogoSize] = useState(40); // Default Brand logo size
   const navigate = useNavigate();
  useEffect(() => {
    // Update icon and logo size based on screen width
    const updateSizes = () => {
      if (window.innerWidth >= 1024) {
        setIconSize(30); // Larger icon for desktop
        setLogoSize(60); // Larger logo for desktop
      } else if (window.innerWidth >= 640) {
        setIconSize(25); // Medium icon for tablets
        setLogoSize(50); // Medium logo for tablets
      } else {
        setIconSize(20); // Default icon for mobile screens
        setLogoSize(40); // Default logo for mobile screens
      }
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);

    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      // Delay removing full-screen height when menu closes
      const timer = setTimeout(() => {
        setMenuClosed(true);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setMenuClosed(false);
      // Trigger GSAP animations when menu opens
      gsap.fromTo(
        '.menu-item',  // Select all elements with the class 'menu-item'
        { opacity: 0, x: 100 },  // Start position and opacity
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          delay:0.3,
          stagger: 0.2,  // Stagger the animation for the items
        }
      );
    }
  }, [menuOpen]);

  // Scroll to section by id
  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className={`absolute top-0 z-20 w-full overflow-hidden ${menuClosed ? '' : 'h-screen'}`}>
      <div className="relative z-20 flex justify-between items-center p-10 h-16">
        <Brand logoSize={logoSize} />

      

        {location.pathname === '/projects' && (
          <button
            onClick={() => navigate("/")}
            className="ml-4 px-4 py-2 bg-[#FF535B] text-white rounded font-coolvetica hover:bg-[#ff5353b] transition"
          >
            Back
          </button>
        )}
        {/* <div className="hidden lg:flex items-center justify-end p-3 mt-10 w-full">
          <a href="#home" className="menu-item" onClick={handleScroll('home')}>
            <h1 className="text-[#FF535B] text-right font-coolvetica text-lg lg:text-2xl mb-10 hover:text-[#ff5353b]">Home</h1>
          </a>
          <a href="#about" className="menu-item ml-10" onClick={handleScroll('about')}>
            <h1 className="text-[#FF535B] text-right font-coolvetica text-lg lg:text-2xl mb-10 hover:text-[#ff5353b]">About</h1>
          </a>
          <a href="#projects" className="menu-item ml-10" onClick={handleScroll('projects')}>
            <h1 className="text-[#FF535B] text-right font-coolvetica text-lg lg:text-2xl mb-10 hover:text-[#ff5353b]">Projects</h1>
          </a>
        </div> */}
        <div className="w-10 h-10 mt-5 flex items-center justify-center">
          <Hamburger
            color="#FF535B"
            direction="right"
            size={iconSize} // Set responsive Hamburger icon size
            onToggle={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>
      <div className={`z-10 absolute w-full h-full bg-zinc-700 top-0 transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-end p-16 mt-10 h-full">
          <a href="#home" className="menu-item" onClick={handleScroll('home')}>
            <h1 className="text-white text-right font-coolvetica text-5xl lg:text-8xl mb-10 hover:text-[#ff5353b]">Home</h1>
          </a>
          <a href="#about" className="menu-item" onClick={handleScroll('about')}>
            <h1 className="text-white text-right font-coolvetica text-5xl lg:text-8xl mb-10 hover:text-[#ff5353b]">About</h1>
          </a>
          <a href="#projects" className="menu-item" onClick={handleScroll('projects')}>
            <h1 className="text-white text-right font-coolvetica text-5xl lg:text-8xl mb-10 hover:text-[#ff5353b]">Projects</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const Brand = ({ logoSize }) => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="Brand Logo" className="mt-4" width={logoSize} />
      </Link>
    </div>
  );
};
