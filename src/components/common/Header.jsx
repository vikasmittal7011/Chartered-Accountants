import { Disclosure } from "@headlessui/react";
import MainNavLinks from "./MainNavLinks";
import MenuButton from "./MenuButton";
import AuthOptions from "./AuthOptions";
import MobileMenuLinks from "./MobileMenuLinks";
import { darklogo } from "../../assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/">
                    <img className="h-11 w-36" src={darklogo} alt="logo" />
                  </Link>
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
