import { Disclosure } from "@headlessui/react";
import MainNavLinks from "../home/MainNavLinks";
import MenuButton from "../home/MenuButton";
import AuthOptions from "../home/AuthOptions";
import MobileMenuLinks from "../home/MobileMenuLinks";
import { darklogo } from "../../assets";

const Header = () => {
  return (
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
  );
};

export default Header;
