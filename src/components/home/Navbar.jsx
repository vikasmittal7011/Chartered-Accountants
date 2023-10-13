import { Disclosure } from "@headlessui/react";

import { darklogo } from "../../assets/index";
import MobileMenuLinks from "./MobileMenuLinks";
import MainNavLinks from "./MainNavLinks";
import MenuButton from "./MenuButton";
import AuthOptions from "./AuthOptions";
import MainSection from "./MainSection";

const Navbar = () => {
  return (
    <>
      <div
        className="lg:h-[750px] relative"
        style={{
          background:
            "linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)",
        }}
      >
        <Disclosure as="nav" className="">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-11 w-36" src={darklogo} alt="logo" />
                    </div>
                    <MainNavLinks />
                  </div>

                  <MenuButton open={open} />
                  <AuthOptions />
                </div>
              </div>
              <MobileMenuLinks />
            </>
          )}
        </Disclosure>
        <MainSection />
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types

export default Navbar;
