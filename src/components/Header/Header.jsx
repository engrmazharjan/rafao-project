import React, { useState } from "react";
import search from "../../assets/svgs/search.svg";
import searchFilled from "../../assets/svgs/search-filled.svg";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header
      className="bg-white shadow-lg"
      style={{ boxShadow: "inset 0 8px 8px -8px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="flex items-center justify-between h-[100px]">
        {/* Your content here */}

        <div className=" flex items-center h-full ">
          {/* Hamburger menu for all screens */}

          <div className="h-full w-[60px] bg-[#225089] flex items-center justify-center mr-4">
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
                  stroke="white"
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
                  stroke="white"
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
          </div>

          {/* Logo and title */}
          <img
            src={logo}
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
          <button onClick={toggleSearch} className="text-blue-900 relative">
            {/* use search-filled svg from assets */}
            {isSearchOpen ? (
              <>
                <img src={searchFilled} />
                <div className="absolute top-11 right-1 bg-[#0074c1] shadow-md p-2 flex items-center space-x-2 mt--2">
                  <input
                    type="text"
                    placeholder="Enter search term"
                    className="border p-2 w-64"
                  />
                  <button className="bg-[#0074c1] text-white px-4 py-2 border border-white">
                    SEARCH
                  </button>
                </div>
              </>
            ) : (
              <img src={search} />
            )}
          </button>
        </nav>
      </div>

      {/* Flyout Menu */}
      <div
        id="flyout-menu"
        className={`${isMenuOpen ? "block border-t-2 border-t-[#d0d0d0] border-b-[4px] border-b-[#225089]" : "hidden"
          } absolute left-0 right-0 bg-opacity-90 black mt-0 shadow-lg`}

      >
        {/* Main navigation */}
        <div className="md:flex md:justify-center">
          {/* Left-side menu (Main links) */}
          <div className="w-full md:w-1/3 p-4 space-y-3 bg-[#E1E5EA] text-left md:text-center">
            <a href="#home" className="block text-xl font-bold">
              Home
            </a>
            <hr className="w-80 border-t-1 mt-1 border-[#C3C3C3] mx-0 md:mx-auto" />

            <a href="#news" className="block text-xl font-bold">
              News & Events
            </a>
            <hr className="w-80 border-t-1 mt-1 border-[#C3C3C3] mx-0 md:mx-auto" />

            <a href="#about" className="block text-xl font-bold">
              About Us
            </a>
            <hr className="w-80 border-t-1 mt-1 border-[#C3C3C3] mx-0 md:mx-auto" />

            <a href="#contact" className="block text-xl font-bold">
              Contact Us
            </a>
            <hr className="w-80 border-t-1 mt-1 border-[#C3C3C3] mx-0 md:mx-auto" />

            <a href="#boards" className="block text-xl font-bold">
              Boards & Committees
            </a>
          </div>

          {/* Right-side menu (Data & Research, etc.) */}
          <div className="w-full md:w-2/3 py-4 px-6 gap-x-2 bg-white md:flex md:flex-wrap">
            <div className="w-full md:w-1/4 py-2 text-left ">
              <h3 className="text-lg font-semibold text-[#1B3A61]">
                DATA & RESEARCH
              </h3>
              <hr className="w-10 border-t-4 border-[#8C6910] mt-1 mb-2 mx-0 " />
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
            <div className="w-full md:w-1/4 py-2 text-left ">
              <h3 className="text-lg font-semibold text-[#1B3A61]">
                GEOGRAPHY & MAPPING
              </h3>
              <hr className="w-10 border-t-4 border-[#8C6910] mt-1 mb-2 mx-0" />
              <ul className="space-y-1 text-xs font-medium">
                <li>Transportation Carrier Network (uber)</li>
                <li>SC Real Time Network</li>
                <li>SC State GIS</li>
                <li>Maps</li>
                <li>Interactive Mapping</li>
                <li>Statewide Aerial Imagery</li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 py-2 text-left ">
              <h3 className="text-lg font-semibold text-[#1B3A61]">
                PROGRAMS & SERVICES
              </h3>
              <hr className="w-10 border-t-4 border-[#8C6910] mt-1 mb-2 mx-0 " />
              <ul className="space-y-1 text-xs font-medium">
                <li>Precinct Demographics and Redistricting</li>
                <li>State 911 Program</li>
                <li>Geodetic Survey</li>
                <li>Fiscal Analysis</li>
                <li>2020 Census</li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 py-2 text-left ">
              <h3 className="text-lg font-semibold text-[#1B3A61]">
                LEGISLATIVE FISCAL IMPACTS
              </h3>
              <hr className="w-10 border-t-4 border-[#8C6910] mt-1 mb-2 mx-0 " />
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
