"use client"
import { useState, useEffect } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = 100;

      setIsSticky(offset > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
     <header
      className={`text-gray-600 body-font ${
        isSticky ? 'fixed top-0 left-0 right-0 bg-custom-gradient shadow-md text-white z-50' : ''
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
          <span className={`ml-3 text-xl bg-gradient-to-r from-[#8490ff] to-[#62bdfc] bg-clip-text text-transparent ${isSticky ? 'text-white' : ''}`}>
            Robindev
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900" href="/">
            Home
          </a>
          <a className="mr-5 hover:text-gray-900" href="#about">
            About
          </a>
          <a className="mr-5 hover:text-gray-900" href="#skills">
            Skills
          </a>
          <a className="mr-5 hover:text-gray-900" href="#education">
            Education
          </a>
          <a className="mr-5 hover:text-gray-900" href="#experience">
          experience
          </a>
          <a className="mr-5 hover:text-gray-900" href="#project">
            Projects
          </a>
        </nav>
      </div>
    </header>

  )
}

export default Header;