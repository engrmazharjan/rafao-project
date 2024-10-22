import "./Footer.css";
import insignia from "../../assets/images/insignia.png";
const Footer = () => {
  return (
    <>
      <div className="bg-[#225089] flex justify-around py-9  ">
        <div className="text-white">
          <h3 className="">
            South Carolina
            <br />
            Revenue and Fiscal Affairs Office
          </h3>
          <img src={insignia} />
        </div>
        <div className="h-full">
          <ul className="flex flex-col text-[#E1E5EA] gap-2">
            <li>Privacy Statement</li>
            <li>FOIA</li>
            <li>Disclosures and Reporting</li>
            <li>Report Fraud</li>
            <li>Accessibility</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="">
          <div className="">
            <p className="text-[#CCCCCC]">MAIN OFFICE</p>
            <p className="text-[#E1E5EA]">
              1000 assembly St, Rembert Dennis building, Suite 421 <br />{" "}
              Columbia, SC 29201
            </p>
          </div>
          <div className="">
            <p className="text-[#CCCCCC]">GEODETIC SURVEY SECTION </p>
            <p className="text-[#E1E5EA]">
              5 Geology Rd <br /> Columbia, SC 29212
            </p>
          </div>
          <div className="">
            <p className="text-[#CCCCCC]">HEALTH and DEMOGRAPHICS DIVISION</p>
            <p className="text-[#E1E5EA]">
              1000 assembly St, Rembert Dennis building, Suite 240 <br />{" "}
              Columbia, SC 29201
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
