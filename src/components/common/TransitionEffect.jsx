import { Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { Fragment } from "react";

const TransitionEffect = (props) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      {props.children}
    </Transition>
  );
};

TransitionEffect.propTypes = {
  children: PropTypes.node,
};

export default TransitionEffect;