import { Menu } from "@headlessui/react";
import { classNames, navigation } from "../../utils/utils";
import TransitionEffect from "./TransitionEffect";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

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

export default MainNavLinks;
