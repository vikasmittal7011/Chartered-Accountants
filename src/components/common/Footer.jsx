/* eslint-disable react/no-unescaped-entities */
import {
  BiLogoLinkedinSquare,
  BiLogoWhatsapp,
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
} from "react-icons/bi";

import { lightlogo } from "../../assets";
import { footerLiks } from "../../utils/utils";

const Footer = () => {
  return (
    <>
      <div className="mt-20 md:pl-6 xs:pl-3 pl-12 py-5 footer-gradient text-white w-full">
        <div className="lg:flex gap-40 pb-10">
          <div>
            <img src={lightlogo} alt="logo" />
            <p className="lg:w-[272px]">
              India's first platform dedicated to simplifying partner search
            </p>
          </div>
          <div className="flex flex-wrap lg:gap-28 gap-16 xs:mt-12 lg:mt-0">
            {footerLiks.map((link, i) => (
              <div key={i}>
                <h1 className="font-bold text-base">{link.title}</h1>
                <div className="flex flex-col mt-1">
                  {link.links.map((sublink, i) => (
                    <a key={i} href="#" className="text-base my-2">
                      {sublink.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b-2 md:mr-6 mr-12"></div>

        <div className="mt-5 flex justify-between lg:flex-row flex-col md:mr-6  mr-12">
          <div>
            <p className="text-sm">
              Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
              Maharashtra
            </p>
          </div>
          <div className="flex gap-2 cursor-pointer xs:mt-5 lg:mt-0">
            <BiLogoWhatsapp size="20" />
            <BiLogoFacebookCircle size="20" />
            <BiLogoInstagramAlt size="20" />
            <BiLogoLinkedinSquare size="20" />
          </div>
        </div>
      </div>

      <div className="bg-black text-center text-white text-xs py-5">
        Registered trademark of India Private Limited © 2023 loerumipsum Inc.
        All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
