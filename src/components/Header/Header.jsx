import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to control search bar visibility (NEW)

  // Toggles the flyout menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggles the search bar visibility (NEW)
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-white shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Hamburger menu for all screens */}
          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="flyout-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-blue-900 mr-4"
          >
            {isMenuOpen ? (
              // Close icon when menu is open
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Logo and title */}
          <img
            src="src\assets\images\logo.png"
            alt="Logo"
            className="mr-3"
            style={{ height: "5rem" }}
          />
          {/* //h2 and p should be flex column */}
          <div className="flex flex-col">
            <h1
              className="font-bold text-blue-900 uppercase"
              style={{ fontFamily: "Roboto Slab", fontSize: "16px" }}
            >
              SOUTH CAROLINA
              <br />
              REVENUE AND FISCAL AFFAIRS OFFICE
            </h1>
            <p className="italic text-sm leading-tight ">
              Transforming data into solutions for South Carolina
            </p>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-4 ">
          <a href="#about" className="text-blue-900">
            ABOUT US
          </a>
          <a href="#events" className="text-blue-900">
            EVENTS
          </a>
          <a href="#boards" className="text-blue-900">
            BOARDS & COMMITTEES
          </a>
          <button 
            onClick={toggleSearch} 
            className="text-blue-900 relative"
        >
        {/* use search-filled svg from assets */}
        {isSearchOpen ? (
            <>
            <img src="src\assets\svgs\search-filled.svg" />
            <div className="absolute top-11 right-1 bg-[#0074c1] shadow-md p-2 flex items-center space-x-2 mt--2">
                <input
                  type="text"
                  placeholder="Enter search term"
                  className="border rounded-md p-2 w-64"
                />
                <button className="bg-[#0074c1] text-white px-4 py-2 border border-white">
                  SEARCH
                </button>
              </div>
            </>
        ):(
            <img src="src\assets\svgs\search.svg" />

        )}

            {/* Conditionally render search bar (NEW) */}
            {/* {isSearchOpen && (
              <div className="absolute top-11 right-1 bg-[#0074c1] shadow-md p-2 flex items-center space-x-2 mt--2">
                <input
                  type="text"
                  placeholder="Enter search term"
                  className="border rounded-md p-2 w-64"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                  SEARCH
                </button>
              </div>
            )} */}
          </button>
        </nav>
      </div>

      {/* Flyout Menu */}
      <div
        id="flyout-menu"
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute left-0 right-0 bg-opacity-90 black py-4 shadow-lg`}
      >
        {/* Main navigation */}
        <div className="md:flex">
          {/* Left-side menu (Main links) */}
          <div className="md:w-1/3 p-4 space-y-6 bg-slate-500">
            <a href="#home" className="block text-2xl">
              Home
            </a>
            <a href="#news" className="block text-2xl">
              News & Events
            </a>
            <a href="#about" className="block text-2xl">
              About Us
            </a>
            <a href="#contact" className="block text-2xl">
              Contact Us
            </a>
            <a href="#boards" className="block text-2xl">
              Boards & Committees
            </a>
          </div>

          {/* Right-side menu (Data & Research, etc.) only for desktop */}
          <div className="hidden md:flex md:flex-wrap md:w-2/3 py-4 px-6 gap-x-2 bg-slate-100">
            <div className="w-1/4 py-2">
              <h3 className="text-lg font-semibold text-[#1B3A61]">
                DATA & RESEARCH
              </h3>
              <hr className="w-10 border-t-4 border-[#8C6910] mt-1 mb-2" />
              <ul className="space-y-1 text-xs font-medium">
                <li>Economy</li>
                <li>State Finances</li>
                <li>Education</li>
                <li>Healthcare</li>
                <li>Local Government</li>
                <li>Population and Demographics</li>
                <li>State Register Calculation</li>
                <li>Presentations</li>
              </ul>
            </div>
            <div className="w-1/4 py-2">
              <h3 className="text-lg font-semibold text-[#1B3A61]">
                GEOGRAPHY & MAPPING
              </h3>
              <hr className="w-10 border-t-4 border-[#8C6910] mt-1 mb-2" />
              <ul className="space-y-1 text-xs font-medium">
                <li>Transportation Carrier Network (uber)</li>
                <li>SC Real Time Network</li>
                <li>SC State GIS</li>
                <li>Maps</li>
                <li>Interactive Mapping</li>
                <li>Statewide Aerial Imagery</li>
              </ul>
            </div>
            <div className="w-1/4 py-2">
              <h3 className="text-lg font-semibold text-[#1B3A61]">
                PROGRAMS & SERVICES
              </h3>
              <hr className="w-10 border-t-4 border-[#8C6910] mt-1 mb-2" />
              <ul className="space-y-1 text-xs font-medium">
                <li>Precinct Demographics and Redistricting</li>
                <li>State 911 Program</li>
                <li>Geodetic Survey</li>
                <li>Fiscal Analysis</li>
                <li>2020 Census</li>
              </ul>
            </div>
            <div className="w-1/4 py-2">
              <h3 className="text-lg font-semibold text-[#1B3A61]">
                LEGISLATIVE FISCAL IMPACTS
              </h3>
              <hr className="w-10 border-t-4 border-[#8C6910] mt-1 mb-2" />
              <ul className="space-y-1 text-xs font-medium">
                <li>Current General Assembly Session</li>
                <li>Previous General Assembly Session</li>
                <li>Forms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
