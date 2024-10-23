import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DataResearchIcon from "./assets/svgs/Data-Research-Icon.svg";
import GeographyIcon from "./assets/svgs/Geography-Icon.svg";
import LegislativeIcon from "./assets/svgs/Legislative-Icon.svg";
import ProgramsIcon from "./assets/svgs/Programs-Icon.svg";
import locationIcon from "./assets/images/location.png";
import clockIcon from "./assets/images/clock.png";
import phoneIcon from "./assets/images/phone.png";

function App() {

  return (
    <>
      <main>
        <Header />
        <div className="mb-12">
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
          <div className="header-section bg-[#e1e5ea] grid grid-cols-12 px-24 py-8 gap-5">
            <div className="lg:col-span-3 md:col-span-6 col-span-12 flex flex-col items-center justify-center bg-[#ffffff] px-3 py-3 h-52">
              <img src={DataResearchIcon} width={70} height={70} />
              <span className="w-28 text-center text-[#142b47] text-[18px] leading-none mt-3 font-[600]">DATA & RESEARCH</span>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12 flex flex-col items-center justify-center bg-[#ffffff] px-3 py-3 h-52">
              <img src={GeographyIcon} width={70} height={70} />
              <span className="w-28 text-center text-[#142b47] text-[18px] leading-none mt-3 font-[600]">GEOGRAPHY & MAPPING</span>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12 flex flex-col items-center justify-center bg-[#ffffff] px-3 py-3 h-52">
              <img src={ProgramsIcon} width={70} height={70} />
              <span className="w-28 text-center text-[#142b47] text-[18px] leading-none mt-3 font-[600]">PROGRAMS & SERVICES</span>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12 flex flex-col items-center justify-center bg-[#ffffff] px-3 py-3  h-52">
              <img src={LegislativeIcon} width={70} height={70} />
              <span className="w-36 text-center text-[#142b47] text-[18px] leading-none mt-3 font-[600]">LEGISLATIVE FISCAL IMPACTS</span>
            </div>
          </div>
          <div className="page-content px-24">
            {/* Services And Links */}
            <div className="services-and-links">
              <div>
                <h1 className="text-[#142b47] lg:text-[24px] text-[18px] font-[700] my-3">POPULAR SERVICES AND LINKS</h1>
                <hr className="border-t-4 border-[#142b47]" />
              </div>

              <div className="grid grid-cols-12 gap-4 py-4">
                <a className="lg:col-span-4 md:col-span-4 col-span-12 underline text-[#0074c1] cursor-pointer">Overview and History of the South Carolina State Budget</a>
                <a className="lg:col-span-4 md:col-span-4 col-span-12 underline text-[#0074c1] cursor-pointer">Overview and History of the South Carolina State Budget</a>
                <a className="lg:col-span-4 md:col-span-4 col-span-12 underline text-[#0074c1] cursor-pointer">Overview and History of the South Carolina State Budget</a>
                <a className="lg:col-span-4 md:col-span-4 col-span-12 underline text-[#0074c1] cursor-pointer">Employer Contribution Trends</a>
                <a className="lg:col-span-4 md:col-span-4 col-span-12 underline text-[#0074c1] cursor-pointer">Employer Contribution Trends - June 4,
                  2019
                </a>
                <a className="lg:col-span-4 md:col-span-4 col-span-12 underline text-[#0074c1] cursor-pointer">Employer Contribution Trends - June 4,
                  2019
                </a>
                <a className="lg:col-span-4 md:col-span-4 col-span-12 underline text-[#0074c1] cursor-pointer">Appropriation Bills and Acts</a>
                <a className="lg:col-span-4 md:col-span-4 col-span-12 underline text-[#0074c1] cursor-pointer">Executive Budget Office
                  State Agency Budget Plans(Requests)
                </a>
                <a className="lg:col-span-4 md:col-span-4 col-span-12 underline text-[#0074c1] cursor-pointer">Executive Budget Office
                  State Agency Budget Plans(Requests)
                </a>
              </div>
            </div>

            {/* Recent Updates & Calendar of Events */}
            <div className="recent-updates-and-calendar-of-events flex lg:flex-row flex-col">
              <div className="recent-updates mb-12">
                <h1 className="mb-2 text-[#1b3a61] text-[18px] font-[600]">Recent Updates</h1>
                <hr className="w-10 border-t-4 border-[#8c6910]" />
                <div className="mt-7 mb-3 flex flex-col">
                  <a className="underline text-[#3068ad] font-[600]">Local Government Finance</a>
                  <p className="mt-2 w-2/3 text-[#333333] leading-none">
                    Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales
                  </p>
                  <small className="text-[12px] mt-2 w-2/3 text-[#757575]"><span className="font-[600] text-[#333333]">Published:</span> Jan 2, 2020 <span className="bg-[#666666] text-[#ffffff] rounded px-1">Updated</span></small>
                </div>

                <div className="mb-3 flex flex-col">
                  <a className="underline text-[#3068ad] font-[600] w-2/3">Transportation Network Carrier Maps</a>
                  <small className="text-[12px] mt-2 w-2/3 text-[#757575]"><span className="font-[600] text-[#333333]">Published:</span> Jan 12, 2020 <span className="bg-[#666666] text-[#ffffff] rounded px-1">New</span></small>
                </div>

                <div className="mb-3 flex flex-col">
                  <a className="underline text-[#3068ad] font-[600] w-2/3">BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23</a>
                  <p className="mt-2 w-2/3 text-[#333333] leading-none">
                    Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales
                  </p>
                  <small className="text-[12px] mt-2 w-2/3 text-[#757575]"><span className="font-[600] text-[#333333]">Published:</span> Dec 13, 2019 <span className="bg-[#666666] text-[#ffffff] rounded px-1">Updated</span></small>
                </div>

                <div className="mb-3 flex flex-col">
                  <a className="underline text-[#3068ad] font-[600] w-2/3">Budget Development</a>
                  <small className="text-[12px] mt-2 w-2/3 text-[#757575]"><span className="font-[600] text-[#333333]">Published:</span> Dec 13, 2019 <span className="bg-[#666666] text-[#ffffff] rounded px-1">New</span></small>
                </div>

                <div className="mb-3 flex flex-col">
                  <a className="underline text-[#3068ad] font-[600] w-2/3">November 2019 General Fund Revenue Digest</a>
                  <small className="text-[12px] mt-2 w-2/3 text-[#757575]"><span className="font-[600] text-[#333333]">Published:</span> Dec 13, 2019 <span className="bg-[#666666] text-[#ffffff] rounded px-1">New</span></small>
                </div>


                <button className="bg-[#0074c1] px-6 py-3 text-[#ffffff] text-[14px] mt-3">
                  View More
                </button>
              </div>
              <div className="calendar-of-events">
                <h1 className="mb-2 text-[#1b3a61] text-[18px] font-[600]">Calendar of Events</h1>
                <hr className="w-10 border-t-4 border-[#8c6910]" />
                <div className="mt-7 mb-3 flex items-start">
                  <div className="label mt-1 flex flex-col items-center justify-center bg-[#8c6910] w-12 h-16 text-[#ffffff] text-[18px] font-[800]">
                    <span className="leading-none">Nov</span>
                    <span className="leading-none">22</span>
                  </div>
                  <div className="content ml-4">
                    <span className="m-0 px-2 text-[#333333] bg-[#d2b859] rounded text-[12px]">Updated</span>
                    <h1 className="m-0 font-[600]">Board of Economic Advisors Meeting</h1>
                    <div className="m-0 flex items-center">
                      <img src={locationIcon} width={18} height={18} className="" />
                      <p className="ml-2 mt-2 mb-2 w-2/3 leading-none text-[14px]">
                        Room 417, Bowers Conference Room, Rembert
                        Dennis Building
                      </p>
                    </div>
                    <div className="m-0 flex items-start">
                      <img src={clockIcon} width={18} height={18} />
                      <p className="ml-2 mb-2 leading-none text-[14px]">1:30 pm</p>
                    </div>
                    <div className="m-0 flex items-start">
                      <img src={phoneIcon} width={18} height={18} />
                      <p className="ml-2 leading-none text-[14px]">(803) 734-2265</p>
                    </div>
                    <hr className="mt-3" />
                  </div>
                </div>

                <div className="mb-3 flex items-start">
                  <div className="label mt-1 flex flex-col items-center justify-center bg-[#8c6910] w-12 h-16 text-[#ffffff] text-[18px] font-[800]">
                    <span className="leading-none">Nov</span>
                    <span className="leading-none">23</span>
                  </div>
                  <div className="content ml-4">
                    <span className="m-0 px-2 text-[#ffffff] bg-[#e9261d] rounded text-[12px]">Cancelled</span>
                    <h1 className="m-0 font-[600]">Board of Economic Advisors Meeting</h1>
                    <div className="m-0 flex items-center">
                      <img src={locationIcon} width={18} height={18} className="" />
                      <p className="ml-2 mt-2 mb-2 w-2/3 leading-none text-[14px]">
                        Room 417, Bowers Conference Room, Rembert
                        Dennis Building
                      </p>
                    </div>
                    <div className="m-0 flex items-start">
                      <img src={clockIcon} width={18} height={18} />
                      <p className="ml-2 mb-2 leading-none text-[14px]">1:30 pm</p>
                    </div>
                    <div className="m-0 flex items-start">
                      <img src={phoneIcon} width={18} height={18} />
                      <p className="ml-2 leading-none text-[14px]">(803) 734-2265</p>
                    </div>
                    <hr className="mt-3" />
                  </div>
                </div>

                <div className="mt-7 mb-3 flex items-start">
                  <div className="label mt-1 flex flex-col items-center justify-center bg-[#8c6910] w-12 h-16 text-[#ffffff] text-[18px] font-[800]">
                    <span className="leading-none">Nov</span>
                    <span className="leading-none">25</span>
                  </div>
                  <div className="content ml-4">
                    <h1 className="m-0 font-[600]">Board of Economic Advisors Meeting</h1>
                    <div className="m-0 flex items-center">
                      <img src={locationIcon} width={18} height={18} className="" />
                      <p className="ml-2 mt-2 mb-2 w-2/3 leading-none text-[14px]">
                        Room 417, Bowers Conference Room, Rembert
                        Dennis Building
                      </p>
                    </div>
                    <div className="m-0 flex items-start">
                      <img src={clockIcon} width={18} height={18} />
                      <p className="ml-2 mb-2 leading-none text-[14px]">1:30 pm</p>
                    </div>
                    <div className="m-0 flex items-start">
                      <img src={phoneIcon} width={18} height={18} />
                      <p className="ml-2 leading-none text-[14px]">(803) 734-2265</p>
                    </div>
                    <hr className="mt-3" />
                  </div>
                </div>

                <div className="mt-7 mb-3 flex items-start">
                  <div className="label mt-1 flex flex-col items-center justify-center bg-[#8c6910] w-12 h-16 text-[#ffffff] text-[18px] font-[800]">
                    <span className="leading-none">Nov</span>
                    <span className="leading-none">28</span>
                  </div>
                  <div className="content ml-4">
                    <h1 className="m-0 font-[600]">Board of Economic Advisors Meeting</h1>
                    <div className="m-0 flex items-center">
                      <img src={locationIcon} width={18} height={18} className="" />
                      <p className="ml-2 mt-2 mb-2 w-2/3 leading-none text-[14px]">
                        Room 417, Bowers Conference Room, Rembert
                        Dennis Building
                      </p>
                    </div>
                    <div className="m-0 flex items-start">
                      <img src={clockIcon} width={18} height={18} />
                      <p className="ml-2 mb-2 leading-none text-[14px]">1:30 pm</p>
                    </div>
                    <div className="m-0 flex items-start">
                      <img src={phoneIcon} width={18} height={18} />
                      <p className="ml-2 leading-none text-[14px]">(803) 734-2265</p>
                    </div>
                  </div>
                </div>

                <button className="bg-[#0074c1] px-6 py-3 text-[#ffffff] text-[14px] mt-3">
                  View All Events
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
