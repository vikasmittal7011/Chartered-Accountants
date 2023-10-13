import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { darklogo } from "../../assets/index";
import { classNames, navigation } from "../../utils/utils";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import TransitionEffect from "./TransitionEffect";

const Navbar = () => {
  return (
    <>
      <div
        className="h-[883px]"
        style={{
          background:
            "linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)",
          // filter: "blur(250px)",
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
      </div>
    </>
  );
};

const MobileMenuLinks = () => (
  <Disclosure.Panel className="md:hidden">
    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
      {navigation.map((item, i) => (
        <Menu as="div" key={i}>
          <Menu as="div" className="relative block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-start items-center gap-x-1.5 rounded-md px-3 py-2 text-lg line font-medium">
                {item.name}
                {item?.subNav && (
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                )}
              </Menu.Button>
            </div>
            <TransitionEffect>
              <Menu.Items className="absolute left-24 z-10 mt-2 w-40 origin-top-right rounded-md bg-gray-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {item?.subNav?.map((item, i) => (
                  <Menu as="div" key={i}>
                    <div className="py-1">
                      <Menu.Item>
                        <a
                          href={item?.href}
                          className={classNames(
                            "block px-4 py-2 text-sm border-b border-gray-500"
                          )}
                        >
                          {item?.name}
                        </a>
                      </Menu.Item>
                    </div>
                  </Menu>
                ))}
              </Menu.Items>
            </TransitionEffect>
          </Menu>
        </Menu>
      ))}
    </div>
    <div className="border-t border-gray-700  pb-3 pt-4">
      <div className="flex items-center px-5"></div>
    </div>
    <div className="flex gap-2 mx-3">
      <button className="w-24 py-2 px-3 border-blue-500 border-2 rounded-lg font-bold text-blue-500">
        Login
      </button>
      <button className="w-24 py-2 px-3 border-blue-500 border-2 rounded-lg font-bold text-white bg-blue-500">
        Register
      </button>
    </div>
  </Disclosure.Panel>
);

const MainNavLinks = () => (
  <div className="hidden md:block">
    <div className="ml-10 flex items-baseline space-x-4">
      {navigation.map((item, i) => (
        <Menu as="div" key={i}>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-2 text-lg line font-medium">
                {item.name}
                {item?.subNav && (
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                )}
              </Menu.Button>
            </div>

            <TransitionEffect>
              <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-gray-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {item?.subNav?.map((item, i) => (
                  <Menu as="div" key={i}>
                    <div className="py-1">
                      <Menu.Item>
                        <a
                          href={item?.href}
                          className={classNames(
                            "block px-4 py-2 text-sm border-b border-gray-500"
                          )}
                        >
                          {item?.name}
                        </a>
                      </Menu.Item>
                    </div>
                  </Menu>
                ))}
              </Menu.Items>
            </TransitionEffect>
          </Menu>
        </Menu>
      ))}
    </div>
  </div>
);

// eslint-disable-next-line react/prop-types
const MenuButton = ({ open }) => (
  <div className="-mr-2 flex md:hidden">
    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-800">
      <span className="absolute -inset-0.5" />
      {open ? (
        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  </div>
);

const AuthOptions = () => (
  <div className="md:flex gap-2 hidden">
    <button className="w-24 py-2 px-3 border-blue-500 border-2 rounded-lg font-bold text-blue-500">
      Login
    </button>
    <button className="w-24 py-2 px-3 border-blue-500 border-2 rounded-lg font-bold text-white bg-blue-500">
      Register
    </button>
  </div>
);

export default Navbar;
