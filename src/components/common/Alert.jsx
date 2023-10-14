import { AiOutlineClose } from "react-icons/ai";

/* eslint-disable react/prop-types */
const Alert = ({ type, message, onClose }) => {
  let alertClasses = "p-4 border rounded-md";

  if (type === "success") {
    alertClasses += " bg-green-200 border-green-600 text-green-800";
  } else if (type === "error") {
    alertClasses += " bg-red-200 border-red-600 text-red-800";
  } else {
    alertClasses += " bg-blue-200 border-blue-600 text-blue-800";
  }
  return (
    <div className="fixed top-0 z-10 w-full">
      <div className={alertClasses}>
        {message}
        <button className="float-right" onClick={onClose}>
          <AiOutlineClose size="24" />
        </button>
      </div>
    </div>
  );
};

export default Alert;
