/* eslint-disable react/prop-types */
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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

export default MenuButton;
