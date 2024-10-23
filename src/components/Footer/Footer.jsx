import "./Footer.css";
import insignia from "../../assets/images/insignia.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1B3A61] py-9  flex flex-col items-center justify-between  text-center gap-10 md:grid md:grid-cols-3 md:text-left md:items-start md:justify-around px-9 max-md:px-3">
       
        <div className="text-white flex flex-col gap-10 max-md:items-center  ">
          <h3 className="leading-tight font-bold">
            South Carolina
            <br />
            Revenue and Fiscal Affairs Office
          </h3>
          <img className="w-32" src={insignia} alt="insignia" />
        </div>

        
        <div className="h-full flex flex-col items-center">
          <ul className="text-base flex flex-col text-[#CCCCCC] gap-2">
            <li>Privacy Statement</li>
            <li>FOIA</li>
            <li>Disclosures and Reporting</li>
            <li>Report Fraud</li>
            <li>Accessibility</li>
            <li>Contact Us</li>
          </ul>
        </div>

        
        <div className="text-sm flex flex-col ">
          <div className="mb-7">
            <p className="text-[#93A4BD] font-bold">MAIN OFFICE</p>
            <p className="text-[#CCCCCC] leading-tight">
              1000 assembly St, Rembert Dennis building, Suite 421 <br />
              Columbia, SC 29201
            </p>
          </div>
          <div className="mb-7">
            <p className="text-[#93A4BD] font-bold">GEODETIC SURVEY SECTION</p>
            <p className="text-[#CCCCCC] leading-tight">
              5 Geology Rd <br />
              Columbia, SC 29212
            </p>
          </div>
          <div>
            <p className="text-[#93A4BD] font-bold">
              HEALTH and DEMOGRAPHICS DIVISION
            </p>
            <p className="text-[#CCCCCC] leading-tight">
              1000 assembly St, Rembert Dennis building, Suite 240 <br />
              Columbia, SC 29201
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
