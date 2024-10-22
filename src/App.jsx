import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DataResearchIcon from "./assets/svgs/Data-Research-Icon.svg";
import GeographyIcon from "./assets/svgs/Geography-Icon.svg";
import LegislativeIcon from "./assets/svgs/Legislative-Icon.svg";
import ProgramsIcon from "./assets/svgs/Programs-Icon.svg";

function App() {

  return (
    <>
      <main>
        <Header />
        <div>
          <div className="hero-section flex flex-col items-center justify-evenly bg-[url('./assets/images/bg-image.jpg')] h-[44vh] bg-inherit bg-cover bg-no-repeat">
            <span className="text-[#ffffff] lg:w-[450px] w-[80%] text-[24px]">Providing independent research, analysis, and resources to facilitate informed policy decisions and administration of services</span>
            <div className="search-container flex items-center justify-center gap-2">
              <input className="lg:w-[400px] w-[100%] px-2 py-3" type="text" placeholder="Search rfa.sc.gov" />
              <button className="bg-[#0074c1] flex items-center justify-center px-2 py-3 text-[#ffffff] text-[14px] w-32 h-[100%]">
                <span className="mr-2">SEARCH</span>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0,0,256,256">
                  <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(8.53333,8.53333)"><path d="M13,3c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c2.39651,0 4.59738,-0.85101 6.32227,-2.26367l5.9707,5.9707c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-5.9707,-5.9707c1.41266,-1.72488 2.26367,-3.92576 2.26367,-6.32227c0,-5.511 -4.489,-10 -10,-10zM13,5c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8z"></path></g></g>
                </svg>
              </button>
            </div>
          </div>
          <div className="header-section bg-[#e1e5ea] flex lg:flex-row flex-col items-center justify-between px-24 py-8 gap-3">
            <div className="flex flex-col items-center justify-center bg-[#ffffff] px-3 py-3 w-48 h-48">
              <img src={DataResearchIcon} width={70} height={70} />
              <span className="w-48 text-center">DATA & RESEARCH</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#ffffff] px-3 py-3 w-48 h-48">
              <img src={GeographyIcon} width={70} height={70} />
              <span className="w-48 text-center">GEOGRAPHY & MAPPING</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#ffffff] px-3 py-3 w-48 h-48">
              <img src={ProgramsIcon} width={70} height={70} />
              <span className="w-48 text-center">PROGRAMS & SERVICES</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#ffffff] px-3 py-3 w-48 h-48">
              <img src={LegislativeIcon} width={70} height={70} />
              <span className="w-48 text-center">LEGISLATIVE FISCAL IMPACTS</span>
            </div>
          </div>
          <div className="page-content"></div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
