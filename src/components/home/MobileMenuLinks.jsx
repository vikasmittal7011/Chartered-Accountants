import { Disclosure, Menu } from "@headlessui/react";
import { classNames, navigation } from "../../utils/utils";
import TransitionEffect from "../common/TransitionEffect";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

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

export default MobileMenuLinks;
