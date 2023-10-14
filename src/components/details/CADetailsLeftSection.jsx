/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import { BsCalendarMinus } from "react-icons/bs";

const CADetailsLeftSection = ({ ca }) => {
  return (
    <div className="lg:w-[515px]">
      <div>
        <h1 className="sm:text-4xl xs:text-2xl font-bold my-5">{ca.name}</h1>
        <p className="sm:text-xl xs:text-lg lg:w-[430px] my-5">{ca.intro}</p>
        <p className="text-blue-500 flex gap-2 text-lg items-center font-bold">
          <AiFillStar size="24" /> {ca.rating}{" "}
          <span className="text-black">({ca.reviewCount})</span>
        </p>
      </div>

      <div className="h-56 my-5 rounded-lg sm:px-10 xs:px-2 py-5 box-shahow">
        <div className="flex justify-between">
          <p className="lg:text-xl">{ca.taskComplexity}</p>
          <p className="font-bold lg:text-2xl">{ca.price}</p>
        </div>

        <p className="flex mt-10 gap-2 sm:text-xl items-center text-blue-500">
          <BsCalendarMinus size="24" />{" "}
          <span className="text-black">{ca.deliveryTime}</span>
        </p>

        <div className="flex justify-between gap-5 mt-10">
          <button className="sm:w-56 font-blod sm:text-base xs:text-sm rounded-xl xs:px-1 xs:py-1 sm:px-2 sm:py-2 font-bold text-white bg-blue-600">
            Request Proposal
          </button>
          <button className="sm:w-56 font-blod sm:text-base xs:text-sm rounded-xl xs:px-1 xs:py-1 sm:px-2 sm:py-2 font-bold text-blue-500 border-2 border-blue-500">
            Chat With Me
          </button>
        </div>
      </div>

      <div className="my-5 rounded-lg sm:px-10 xs:px-2 py-5 box-shahow">
        <div className="flex justify-between">
          <h1 className="font-bold lg:text-4xl xs:text-2xl">What people say?</h1>
        </div>

        <p className="mt-10 gap-2 lg:text-xl xs:text-lg ">
          {ca.testimonial.text}
          <p className="text-base text-gray-500 text-right">
            - {ca.testimonial.author}
          </p>
        </p>

        <div className="mt-10 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="86"
            height="10"
            viewBox="0 0 86 10"
            fill="none"
            className="text-center"
          >
            <circle cx="45" cy="5" r="5" fill="#C5C5C5" />
            <circle cx="63" cy="5" r="5" fill="#C5C5C5" />
            <circle cx="81" cy="5" r="5" fill="#C5C5C5" />
            <rect width="32" height="10" rx="5" fill="#0076CE" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CADetailsLeftSection;
