/* eslint-disable react/prop-types */
import CADetailsLeftSection from "./CADetailsLeftSection";
import CADetailsRightSection from "./CADetailsRightSection";

const CADetails = ({ ca }) => {
  return (
    <div className="mt-20 sm:px-6 lg:px-8 m-10 lg:flex">
      <CADetailsLeftSection ca={ca} />
      <CADetailsRightSection ca={ca} />
    </div>
  );
};

export default CADetails;
